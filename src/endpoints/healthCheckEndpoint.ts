import { type Endpoint } from 'payload/config'

const healthCheckEndpoint: Endpoint = {
  path: '/health',
  method: 'get',
  handler (request, response): void {
    response.status(200).send('Healthy')
  }
}

export default healthCheckEndpoint
