import {setup, mutateBuilder} from '../graphql'
import {GRAPH_ENDPOINT as endpoint, APP_SECRET as appSecret} from '../config'

const {client, mutates} = setup({endpoint, appSecret})

export const mutate = mutateBuilder({mutates})

//#region Interfaces
interface ILocalLoginPayload {
  email: string
  password: string
}
//#endregion

//#region Mutations
export const loginLocal = ({email, password}: ILocalLoginPayload) => {
  return mutate({operator: 'login', variables: {email, password}})
}
//#endregion
