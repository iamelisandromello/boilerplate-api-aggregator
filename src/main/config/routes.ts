import { Controller } from '@/presentation/controllers/controller-abstract'
import { AdapterLambda } from '@/main/adapters'
import { makeExampleController } from '@/main/factories/controllers/example'

import {
/*   APIGatewayProxyEvent, */
  APIGatewayProxyResult
} from 'aws-lambda/trigger/api-gateway-proxy'

type Route = { event: any, route: string, method: Method }
type Method = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'
type GuardRoute = { route: string, method: Method }

export const adaptRoute = async (params: Route): Promise <APIGatewayProxyResult | false> => {
  const { event, ...rest } = params
  const controller = guardRoute(rest)
  if (controller) {
    const adpater = new AdapterLambda(controller)
    const data = await adpater.handler(event)
    return data
  }
  return false
}

const guardRoute = (params: GuardRoute): Controller | false => {
  const { route, method } = params
  if (route === '/example' && method === 'POST') return makeExampleController()
  return false
}
