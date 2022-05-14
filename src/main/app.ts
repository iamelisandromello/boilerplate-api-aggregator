import './config/module-alias'
import { testVariables, variables } from '@/main/config/variables'
import { adaptRoute } from './config/routes'
import { environmentError, notFound } from '@/presentation/helpers'
import { EnvironmentVariablesError, NotFoundRouteError } from '@/presentation/errors'

import {
  /* APIGatewayProxyEvent, */
  APIGatewayProxyResult
} from 'aws-lambda/trigger/api-gateway-proxy'

export const lambdaHandler = async (
  event: any
): Promise<APIGatewayProxyResult> => {
  const haveVariables = testVariables()
  if (!haveVariables) return environmentError(new EnvironmentVariablesError())

  const isRoute = ('path' in event) && ('httpMethod' in event)
  if (!isRoute) return notFound(new NotFoundRouteError())

  const route = event.path
  const method = event.httpMethod
  const data = await adaptRoute({ event, route, method })
  if (!data) return notFound(new NotFoundRouteError())

  const response = {
    audiance: variables.audiance
  }
  console.log('RETORNO CONTROLLER: ', response)

  return data
}
