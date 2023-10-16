import { type Endpoint } from 'payload/config'
import Joi from 'joi'
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise'
import InvalidReCaptcha from '../errors/InvalidReCaptcha'
import { verifyGoogleReCaptcha } from '../serverUtilities'
import { PubSub } from '@google-cloud/pubsub'

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
        return await (new PubSub())
          .topic(process.env.EMAIL_API_TOPIC ?? '')
          .publishMessage({
            attributes: {
              app: 'itmayziii-api',
              domain: 'tommymay.dev'
            },
            data: Buffer.from(JSON.stringify({
              sender: process.env.EMAIL_FROM,
              subject: `Contact Form Submission - ${request.body.subject}`,
              template: 'contact.html',
              to: process.env.CONTACT_EMAIL,
              data: {
                name: request.body.name,
                email: request.body.email,
                subject: request.body.subject,
                message: request.body.message
              }
            }))
          })
      })
      .then(() => response.sendStatus(200))
      .catch(error => {
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
