import {GraphQLClient} from 'graphql-request'
import {map, find} from 'lodash'
import {mutationLogin, mutationSignup} from './authql'

//TODO move this to separated plugin file.
const mutations = {login: mutationLogin, signup: mutationSignup}
const queries = {}

//#region Interfaces

interface IGraphClient {
  endpoint: string
  appSecret: string
}

interface ISetupMutations {
  client: GraphQLClient
  mutations: {[key: string]: any}
}

interface IMutateBuilder {
  mutates: any[]
}

interface IMutatePayload {
  operator: string
  variables: any
}

//#endregion

//#region Functions

/**
 * @description Simply create GraphQL Client with auth token.
 * @return {IGraphServer}
 */
const createGraphQLClient = ({endpoint, appSecret}: IGraphClient) => {
  const headers = {Authorization: `Bearer ${appSecret}`}
  return new GraphQLClient(endpoint, {headers})
}

/**
 * @description Transfer map list of mutations key-values to array of mutations.
 */
const setupMutations = ({client, mutations}: ISetupMutations): any[] => {
  return map(mutations, (mutation: any, operator: string) => ({
    operator,
    mutate: (variables: any) => client.request(mutation, variables),
  }))
}

/**
 * @description Setup GraphQL queries & mutations.
 * @param endpoint GraphQL Server Endpoint.
 * @param appSecret GraphQL JWT Secret.
 */
export const setup = ({endpoint, appSecret}: IGraphClient) => {
  console.log(endpoint, appSecret)
  const client = createGraphQLClient({endpoint, appSecret})
  const mutates = setupMutations({client, mutations})
  return {client, mutates}
}

/**
 * @description Execute mutate query to server.
 * @example:
 * In the app, run setup first, then make a function return from this function.
 * const {mutates} = setup({endpoint, appSecret})
 * const mutate = mutateBuilder(mutates)
 * const result = await mutate('login', {email: 'admin@example.com', password: 'nooneknows'})
 */
export const mutateBuilder = ({mutates}: IMutateBuilder) => async ({
  operator,
  variables,
}: IMutatePayload) => {
  try {
    const mutation = find(mutates, m => m.operator === operator)
    const result = await mutation.mutate(variables)
    return result
  } catch (err) {
    throw new Error(err)
  }
}

//#endregion
