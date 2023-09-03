import { type GlobalConfig } from 'payload/types'

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
  ]
}

export default userInfoGlobal
