import express from 'express'
import payload from 'payload'
import MissingEnvVarError from './errors/MissingEnvVarError'
import mg from 'nodemailer-mailgun-transport'
import nodemailer from 'nodemailer'

const app = express()

const start = async (): Promise<void> => {
  if (process.env.PAYLOAD_SECRET == null || process.env.PAYLOAD_SECRET === '') {
    throw new MissingEnvVarError('PAYLOAD_SECRET')
  }
  if (process.env.MONGODB_URI == null || process.env.MONGODB_URI === '') {
    throw new MissingEnvVarError('MONGODB_URI')
  }
  if (process.env.MG_KEY == null || process.env.MG_KEY === '') {
    throw new MissingEnvVarError('MG_KEY')
  }
  if (process.env.MG_DOMAIN == null || process.env.MG_DOMAIN === '') {
    throw new MissingEnvVarError('MG_DOMAIN')
  }
  let port = 3000
  if (process.env.PORT != null && process.env.port !== '') {
    port = Number(process.env.PORT)
  }
  if (process.env.EMAIL_FROM == null || process.env.EMAIL_FROM === '') {
    throw new MissingEnvVarError('EMAIL_FROM')
  }
  if (process.env.EMAIL_FROM_NAME == null || process.env.EMAIL_FROM_NAME === '') {
    throw new MissingEnvVarError('EMAIL_FROM_NAME')
  }

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    email: {
      fromName: process.env.EMAIL_FROM_NAME,
      fromAddress: process.env.EMAIL_FROM,
      transport: nodemailer.createTransport(mg({
        auth: {
          api_key: process.env.MG_KEY,
          domain: process.env.MG_DOMAIN
        }
      }))
    },
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    }
  })

  app.listen(port)
}

export default start
