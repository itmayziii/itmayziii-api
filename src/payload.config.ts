import path from 'path'
import { buildConfig } from 'payload/config'
import { payloadCloud as payloadCloudStorage } from '@payloadcms/plugin-cloud'

import usersCollection from './collections/users'
import machinesCollection from './collections/machines'
import headshotsCollection from './collections/headshots'

import homeGlobal from './globals/home'
import userInfoGlobal from './globals/user-info'
import navGlobal from './globals/nav'

export default buildConfig({
  admin: {
    user: usersCollection.slug
  },
  collections: [
    usersCollection,
    machinesCollection,
    headshotsCollection
  ],
  globals: [
    userInfoGlobal,
    homeGlobal,
    navGlobal
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  },
  plugins: [
    payloadCloudStorage()
  ]
})
