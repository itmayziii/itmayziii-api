import { type Endpoint } from 'payload/config'
import payload from 'payload'
import path from 'path'
import Joi from 'joi'
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise'
import InvalidReCaptcha from '../errors/InvalidReCaptcha'
import { handlebarHtml, verifyGoogleReCaptcha } from '../serverUtilities'

const validationSchema = Joi.object({
  name: Joi.string().required().max(100),
  email: Joi.string().email().required().max(200),
  subject: Joi.string().required().max(200),
  message: Joi.string().required().max(2000),
  'g-recaptcha-response': Joi.string().required().max(10000)
}).required().options({ abortEarly: false })
const recaptchaClient = new RecaptchaEnterpriseServiceClient()

const contactFormEndpoint: Endpoint = {
  path: '/forms/contact',
  method: 'post',
  handler (request, response): void {
    const validationResult = validationSchema.validate(request.body)
    if (validationResult.error != null) {
      response.status(422).json(validationResult.error.details)
      return
    }

    void verifyGoogleReCaptcha(recaptchaClient, request.body['g-recaptcha-response'])
      .then(async () => {
        const templateData = {
          name: request.body.name,
          email: request.body.email,
          subject: request.body.subject,
          message: request.body.message
        }
        const emailHtml = await handlebarHtml(
          path.resolve(__dirname, '../email-templates/contactEmail.handlebars'),
          templateData
        )
        return await payload.sendEmail({
          from: {
            name: 'No Reply - tommymay.dev',
            address: 'no-reply@tommymay.dev'
          },
          subject: `Contact Form Submission - ${request.body.subject}`,
          html: emailHtml,
          to: 'tommymay37@gmail.com'
        })
      })
      .then(() => response.sendStatus(200))
      .catch(error => {
        console.log('error', error)
        if (error.name === InvalidReCaptcha.errorName) {
          response.status(422).json([
            { message: `"g-recaptcha-response" ${error.message}`, path: 'g-recaptcha-response' }
          ])
          return
        }

        response.sendStatus(500)
      })
  }
}

export default contactFormEndpoint
