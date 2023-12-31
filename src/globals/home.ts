import { type GlobalConfig } from 'payload/types'
import iconField from '../fields/iconField'
import proficiencyField from '../fields/proficiencyField'

const homeGlobal: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'whatIDo',
      label: 'What I Do',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          maxLength: 30,
          required: true
        },
        {
          name: 'sections',
          type: 'array',
          required: true,
          fields: [
            {
              ...iconField,
              hasMany: false,
              required: true
            },
            {
              name: 'title',
              type: 'text',
              maxLength: 30,
              required: true
            },
            {
              name: 'description',
              type: 'textarea',
              maxLength: 300,
              required: true
            }
          ]
        }
      ]
    },
    {
      name: 'skills',
      label: 'Skills',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          maxLength: 30,
          required: true
        },
        {
          name: 'skills',
          type: 'array',
          required: true,
          fields: [
            {
              ...iconField,
              hasMany: false,
              required: true
            },
            {
              name: 'name',
              type: 'text',
              maxLength: 50,
              required: true
            },
            {
              ...proficiencyField,
              hasMany: false,
              required: true
            }
          ]
        }
      ]
    }
  ]
}

export default homeGlobal
