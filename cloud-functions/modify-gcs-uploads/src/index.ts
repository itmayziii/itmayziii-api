import * as functions from '@google-cloud/functions-framework'
import { StorageObjectData } from '@google/events/cloud/storage/v1/StorageObjectData'
import { Storage } from '@google-cloud/storage'

const storage = new Storage()

functions.cloudEvent < StorageObjectData > ('modifyGcsUploads', (cloudEvent) => {
  if (cloudEvent.data?.bucket == null) throw new Error('No cloudEvent bucket provided')
  if (cloudEvent.data?.name == null) throw new Error('No cloudEvent object name provided')
  if (!cloudEvent.data.name.startsWith('images/')) return

  const bucket = storage.bucket(cloudEvent.data.bucket)
  const file = bucket.file(cloudEvent.data.name)
  const secondsInYear = 31536000
  return file.setMetadata({
    cacheControl: `public, max-age=${secondsInYear}`
  })
})
