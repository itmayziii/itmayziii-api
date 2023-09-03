import { type GlobalConfig } from 'payload/types'

const homeGlobal: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'description',
      type: 'text',
      required: true,
      maxLength: 500
    }
  ]
}

export default homeGlobal
