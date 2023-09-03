import { type CollectionConfig } from 'payload/types'

const machinesCollection: CollectionConfig = {
  slug: 'machines',
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true
  },
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 100
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      maxLength: 400
    }
  ]
}

export default machinesCollection
