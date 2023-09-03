import { type CollectionConfig } from 'payload/types'

const usersCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ]
}

export default usersCollection
