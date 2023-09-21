import crypto from 'crypto'
import { type FieldHook } from 'payload/types'
import { type RecaptchaEnterpriseServiceClient, type protos } from '@google-cloud/recaptcha-enterprise'
import InvalidReCaptcha from './errors/InvalidReCaptcha'
import fs from 'fs/promises'
import Handlebars from 'handlebars'

/**
 * https://developers.google.com/maps/documentation/maps-static/digital-signature
 */
export function signStaticMapUrl (url: URL): string {
  url.searchParams.set('key', process.env.GOOGLE_STATIC_MAPS_KEY ?? '')
  url.searchParams.set('map_id', 'f870480aa8aff2ef')
  url.searchParams.delete('signature')

  const secret = Buffer.from(process.env.GOOGLE_SIGNING_SECRET ?? '', 'base64url')
  const signedUrl = crypto.createHmac('sha1', secret)
    .update(`${url.pathname}${url.search}`)
    .digest('base64url')
  url.searchParams.set('signature', signedUrl)
  return url.toString()
}

export const signStaticMapUrlHook: FieldHook = function signStaticMapUrlHook ({ value }) {
  return signStaticMapUrl(new URL(value))
}

export async function verifyGoogleReCaptcha (
  client: RecaptchaEnterpriseServiceClient,
  token: string
): Promise<protos.google.cloud.recaptchaenterprise.v1.IAssessment> {
  const [assessmentResponse] = await client.createAssessment({
    assessment: {
      event: {
        token,
        siteKey: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
        expectedAction: 'contact'
      }

    },
    parent: client.projectPath(process.env.GOOGLE_PROJECT_ID ?? '')
  })

  const {
    tokenProperties,
    riskAnalysis
  } = assessmentResponse
  if (tokenProperties?.valid == null || !tokenProperties.valid) {
    const reason = assessmentResponse.tokenProperties?.invalidReason ?? 'no reason provided'
    throw new InvalidReCaptcha(`invalid token, reason: ${reason}`)
  }

  if (tokenProperties.action !== 'contact') {
    throw new InvalidReCaptcha(`token is for action "${tokenProperties.action}" but should be for "contact"`)
  }

  // Not going to be a perfect rounding because floating point numbers and computers don't play well, but this is
  // "good enough" for something that doesn't deal with money or some important number
  const riskScore = Math.round(((riskAnalysis?.score ?? 0) + Number.EPSILON) * 100)
  if (riskScore < 0.9) {
    const reasons = riskAnalysis?.reasons ?? ['no reason provided']
    throw new InvalidReCaptcha(`Google reCAPTCHA score is too low - ${reasons.join(', ')}`)
  }

  return assessmentResponse
}

export async function handlebarHtml (templatePath: string, data: Record<string, any>): Promise<string> {
  const contents = await fs.readFile(templatePath, 'utf8')
  const compiledTemplate = Handlebars.compile(contents)
  return compiledTemplate(data)
}
