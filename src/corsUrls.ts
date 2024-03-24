export default function corsUrls (): string[] {
  if (process.env.CORS_URLS == null || process.env.CORS_URLS === '') return []

  return process.env.CORS_URLS.split(',')
}
