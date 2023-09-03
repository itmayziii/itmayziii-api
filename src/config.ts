import MissingEnvVarError from './errors/missing-env-var-error'

export interface Configuration {
  payloadSecret: string
  mongoUri: string
}

if (process.env.PAYLOAD_SECRET === undefined) {
  throw new MissingEnvVarError('PAYLOAD_SECRET')
}
if (process.env.MONGODB_URI === undefined) {
  throw new MissingEnvVarError('MONGODB_URI')
}

const appConfig: Configuration = {
  payloadSecret: process.env.PAYLOAD_SECRET,
  mongoUri: process.env.MONGODB_URI
}

export default appConfig
