import express from 'express'
import payload from 'payload'
import MissingEnvVarError from './errors/MissingEnvVarError'
import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'

const app = express()

const mailAuth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY ?? '',
    domain: process.env.MAILGUN_DOMAIN ?? ''
  }
}

const start = async (): Promise<void> => {
  if (process.env.PAYLOAD_SECRET == null || process.env.PAYLOAD_SECRET === '') {
    throw new MissingEnvVarError('PAYLOAD_SECRET')
  }
  if (process.env.MONGODB_URI == null || process.env.MONGODB_URI === '') {
    throw new MissingEnvVarError('MONGODB_URI')
  }

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
    email: {
      transport: nodemailer.createTransport(mg(mailAuth)),
      fromName: 'No Reply - tommymay.dev',
      fromAddress: 'no-reply@tommymay.dev'
    }
  })

  app.listen(3000)
}

export default start
