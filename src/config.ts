import MissingEnvVarError from './errors/missing-env-var-error'

export interface Configuration {
  payloadSecret: string
  mongoUri: string
  mediaUrl?: string
}

if (process.env.PAYLOAD_SECRET == null || process.env.PAYLOAD_SECRET === '') {
  throw new MissingEnvVarError('PAYLOAD_SECRET')
}
if (process.env.MONGODB_URI == null || process.env.MONGODB_URI === '') {
  throw new MissingEnvVarError('MONGODB_URI')
}

const appConfig: Configuration = {
  payloadSecret: process.env.PAYLOAD_SECRET,
  mongoUri: process.env.MONGODB_URI,
  mediaUrl: process.env.MEDIA_URL === '' ? undefined : process.env.MEDIA_URL
}

export default appConfig
