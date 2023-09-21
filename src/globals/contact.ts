import { type GlobalConfig } from 'payload/types'
import { signStaticMapUrlHook } from '../serverUtilities'
import iconField from '../fields/iconField'

const contactGlobal: GlobalConfig = {
  slug: 'contact',
  fields: [
    {
      name: 'title',
      type: 'text',
      maxLength: 100,
      required: true
    },
    {
      name: 'details',
      label: 'Details',
      type: 'group',
      fields: [
        {
          name: 'map',
          label: 'Map',
          type: 'group',
          fields: [
            {
              name: 'link',
              type: 'text',
              maxLength: 2000,
              required: true,
              hooks: {
                beforeChange: [signStaticMapUrlHook]
              }
            },
            {
              name: 'alt',
              type: 'text',
              required: true,
              maxLength: 400
            }
          ]
        },
        {
          name: 'location',
          label: 'Location',
          type: 'group',
          fields: [
            {
              ...iconField,
              hasMany: false,
              required: true
            },
            {
              name: 'title',
              type: 'text',
              maxLength: 100,
              required: true
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              maxLength: 300
            }
          ]
        },
        {
          name: 'email',
          label: 'Email',
          type: 'group',
          fields: [
            {
              ...iconField,
              hasMany: false,
              required: true
            },
            {
              name: 'email',
              type: 'email',
              unique: false,
              index: false,
              required: true
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              maxLength: 300
            }
          ]
        }
      ]
    }
  ]
}

export default contactGlobal
