import { type CollectionConfig } from 'payload/types'

const usersCollection: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 7200, // 2 hours
    verify: true,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000 // 600 seconds, 10 minutes
  },
  admin: {
    useAsTitle: 'email'
  },
  fields: []
}

export default usersCollection
