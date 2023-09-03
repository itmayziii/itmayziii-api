import express from 'express'
import payload from 'payload'
import config from './config'

const app = express()

const start = async (): Promise<void> => {
  await payload.init({
    secret: config.payloadSecret,
    mongoURL: config.mongoUri,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    }
  })

  app.listen(3000)
}

export default start
