import { type GlobalConfig } from 'payload/types'

const navGlobal: GlobalConfig = {
  slug: 'nav',
  fields: [
    {
      name: 'links',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          maxLength: 100
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          maxLength: 1000
        }
      ]
    }
  ]
}

export default navGlobal
