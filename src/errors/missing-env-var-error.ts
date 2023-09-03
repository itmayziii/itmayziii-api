export default class MissingEnvVarError extends Error {
  constructor (private readonly _name: string) {
    super(`Missing environment variable: ${_name}`)
    this.name = 'MissingEnvVarError'
  }

  get envVar (): string {
    return this._name
  }
}
