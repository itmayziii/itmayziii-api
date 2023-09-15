import { type CollectionConfig } from 'payload/types'

// 4x is about the highest device pixel ratio for smartphones these days. We are generating a lot of images here
// to make sure we are serving sharp images for higher resolution devices.

const mobileSize = 380
// eslint-disable-next-line @typescript-eslint/naming-convention
const mobileSize1_5x = mobileSize * 1.5
const mobileSize2x = mobileSize * 2
const mobileSize3x = mobileSize * 3
const mobileSize4x = mobileSize * 4

const headshotsCollection: CollectionConfig = {
  slug: 'headshots',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true
  },
  upload: {
    staticURL: process.env.MEDIA_URL === undefined ? '/media/headshots' : `${process.env.MEDIA_URL}/headshots`,
    staticDir: '../media/headshots',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 150,
        height: 150,
        position: 'centre',
        formatOptions: {
          format: 'jpg'
        }
      },
      {
        name: 'thumbnailWebp',
        width: 150,
        height: 150,
        position: 'centre',
        formatOptions: {
          format: 'webp'
        }
      },
      {
        name: 'thumbnailAvif',
        width: 150,
        height: 150,
        position: 'centre',
        formatOptions: {
          format: 'avif'
        }
      },
      {
        name: 'mobile',
        width: mobileSize,
        height: mobileSize,
        position: 'centre',
        formatOptions: {
          format: 'jpg'
        }
      },
      {
        name: 'mobileWebp',
        width: mobileSize,
        height: mobileSize,
        position: 'centre',
        formatOptions: {
          format: 'webp'
        }
      },
      {
        name: 'mobileAvif',
        width: mobileSize,
        height: mobileSize,
        position: 'centre',
        formatOptions: {
          format: 'avif'
        }
      },
      {
        name: 'mobile1_5x',
        width: mobileSize1_5x,
        height: mobileSize1_5x,
        position: 'centre',
        formatOptions: {
          format: 'jpg'
        }
      },
      {
        name: 'mobileWebp1_5x',
        width: mobileSize1_5x,
        height: mobileSize1_5x,
        position: 'centre',
        formatOptions: {
          format: 'webp'
        }
      },
      {
        name: 'mobileAvif1_5x',
        width: mobileSize1_5x,
        height: mobileSize1_5x,
        position: 'centre',
        formatOptions: {
          format: 'avif'
        }
      },
      {
        name: 'mobile2x',
        width: mobileSize2x,
        height: mobileSize2x,
        position: 'centre',
        formatOptions: {
          format: 'jpg'
        }
      },
      {
        name: 'mobileWebp2x',
        width: mobileSize2x,
        height: mobileSize2x,
        position: 'centre',
        formatOptions: {
          format: 'webp'
        }
      },
      {
        name: 'mobileAvif2x',
        width: mobileSize2x,
        height: mobileSize2x,
        position: 'centre',
        formatOptions: {
          format: 'avif'
        }
      },
      {
        name: 'mobile3x',
        width: mobileSize3x,
        height: mobileSize3x,
        position: 'centre',
        formatOptions: {
          format: 'jpg'
        }
      },
      {
        name: 'mobileWebp3x',
        width: mobileSize3x,
        height: mobileSize3x,
        position: 'centre',
        formatOptions: {
          format: 'webp'
        }
      },
      {
        name: 'mobileAvif3x',
        width: mobileSize3x,
        height: mobileSize3x,
        position: 'centre',
        formatOptions: {
          format: 'avif'
        }
      },
      {
        name: 'mobile4x',
        width: mobileSize4x,
        height: mobileSize4x,
        position: 'centre',
        formatOptions: {
          format: 'jpg'
        }
      },
      {
        name: 'mobileWebp4x',
        width: mobileSize4x,
        height: mobileSize4x,
        position: 'centre',
        formatOptions: {
          format: 'webp'
        }
      },
      {
        name: 'mobileAvif4x',
        width: mobileSize4x,
        height: mobileSize4x,
        position: 'centre',
        formatOptions: {
          format: 'avif'
        }
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
      maxLength: 50,
      index: true
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
