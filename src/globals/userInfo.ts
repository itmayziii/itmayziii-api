import { type GlobalConfig } from 'payload/types'
import iconField from '../fields/iconField'

const userInfoGlobal: GlobalConfig = {
  slug: 'user-info',
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
      maxLength: 50
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      maxLength: 50
    },
    {
      name: 'suffix',
      type: 'select',
      hasMany: false,
      options: [
        {
          label: 'Sr.',
          value: 'Sr.'
        },
        {
          label: 'Jr.',
          value: 'Jr.'
        },
        {
          label: 'III',
          value: 'III'
        },
        {
          label: 'IV',
          value: 'IV'
        },
        {
          label: 'V',
          value: 'V'
        }
      ]
    },
    {
      name: 'fullName',
      type: 'text',
      admin: {
        hidden: true
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            // ensures data is not stored in DB
            delete siblingData.fullName
          }
        ],
        afterRead: [
          ({ data }) => {
            if (data == null) return ''
            return `${data.firstName} ${data.lastName} ${data.suffix}`
          }
        ]
      }
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      maxLength: 500
    },
    {
      name: 'titles',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          maxLength: 100
        }
      ]
    },
    {
      name: 'socials',
      type: 'array',
      required: true,
      fields: [
        {
          ...iconField,
          hasMany: false,
          required: true
        },
        {
          name: 'link',
          type: 'text',
          maxLength: 1000,
          required: true
        },
        {
          name: 'label',
          type: 'text',
          maxLength: 100,
          required: true
        }
      ]
    }
  ]
}

export default userInfoGlobal
