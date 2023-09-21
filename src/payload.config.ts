import path from 'path'
import { buildConfig } from 'payload/config'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { gcsAdapter } from '@payloadcms/plugin-cloud-storage/gcs'
import usersCollection from './collections/users'
import machinesCollection from './collections/machines'
import headshotsCollection from './collections/headshots'
import homeGlobal from './globals/home'
import userInfoGlobal from './globals/userInfo'
import navGlobal from './globals/nav'
import contactGlobal from './globals/contact'
import contactFormEndpoint from './endpoints/contactFormEndpoint'

const emptyMockPath = path.resolve(__dirname, 'mocks/empty')
const serverUtilitiesPath = path.resolve(__dirname, 'serverUtilities')
const serverUtilitiesMockPath = path.resolve(__dirname, 'mocks/serverUtilitiesMock')
const contactFormEndpointPath = path.resolve(__dirname, 'endpoints/contactFormEndpoint')
const contactFormEndpointMockPath = path.resolve(__dirname, 'mocks/contactFormEndpointMock')
const fsPromisesPath = 'fs/promises'

export default buildConfig({
  admin: {
    user: usersCollection.slug,
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve?.alias ?? {}),
          [serverUtilitiesPath]: serverUtilitiesMockPath,
          [contactFormEndpointPath]: contactFormEndpointMockPath,
          [fsPromisesPath]: emptyMockPath
        }
      }
    })
  },
  collections: [
    usersCollection,
    machinesCollection,
    headshotsCollection
  ],
  globals: [
    userInfoGlobal,
    homeGlobal,
    navGlobal,
    contactGlobal
  ],
  endpoints: [contactFormEndpoint],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  },
  plugins: [
    cloudStorage({
      enabled: process.env.APP_ENV === 'production',
      collections: {
        headshots: {
          adapter: gcsAdapter({
            options: {},
            bucket: process.env.GCS_BUCKET ?? ''
          }),
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
          prefix: 'images/headshots'
        }
      }
    })
  ]
})
