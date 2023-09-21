export default class InvalidReCaptcha extends Error {
  static errorName = 'InvalidReCaptcha'

  constructor (readonly message: string) {
    super(message)
    this.name = InvalidReCaptcha.errorName
  }
}
