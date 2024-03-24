export default function csrfUrls (): string[] {
  if (process.env.CSRF_URLS == null || process.env.CSRF_URLS === '') return []

  return process.env.CSRF_URLS.split(',')
}
