import { type CollectionConfig } from 'payload/types'

const headshotsCollection: CollectionConfig = {
  slug: 'headshots',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true
  },
  upload: {
    staticURL: '/media/headshots',
    staticDir: '../media/headshots',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 150,
        height: 150,
        position: 'centre'
      },
      {
        name: 'mobile',
        width: 252,
        height: 252
      }
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 50
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      maxLength: 400
    }
  ]
}

export default headshotsCollection
