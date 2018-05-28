import ApolloClient, {InMemoryCache} from 'apollo-boost'
import {map} from 'lodash'
import {mutationLogin, mutationSignup} from './authql'

const mutations = {login: mutationLogin, signup: mutationSignup}
const queries = {}

//#region Interfaces

interface IGraphClient {
  endpoint: string
  appSecret: string
}

interface ISetupMutations {
  client: ApolloClient<InMemoryCache>
  mutations: {[key: string]: any}
}

//#endregion

//#region Functions

/**
 * Simply create GraphQL Client.
 * @return {IGraphServer}
 */
const createGraphQLClient = ({endpoint, appSecret}: IGraphClient) => {
  return new ApolloClient<InMemoryCache>({
    uri: endpoint,
    fetchOptions: {headers: {Authorization: `Bearer ${appSecret}`}},
  })
}

/**
 * Setup map of mutations.
 */
const setupMutations = ({client, mutations}: ISetupMutations) => {
  const mutate = (mutation, variables) => client.mutate({mutation, variables})
  const iterator = (mutation, name) => variables => ({name, mutate: mutate(mutation, variables)})
  return map(mutations, iterator)
}

/**
 * Setup GraphQL queries & mutations.
 * @param endpoint GraphQL Server Endpoint.
 * @param appSecret GraphQL JWT Secret.
 */
export const setup = ({endpoint, appSecret}: IGraphClient) => {
  const client = createGraphQLClient({endpoint, appSecret})
  setupMutations({client, mutations})
}

//#endregion
