import {setup, mutateBuilder} from '../graphql'
import {GRAPH_ENDPOINT as endpoint} from '../config'

const {client, setHeader, mutates} = setup({endpoint})

export const mutate = mutateBuilder({mutates})

//#region Interfaces
interface ILocalLoginPayload {
  email: string
  password: string
}

interface IFacebookLoginPayload {
  email: string
  facebook: string
  name: string
  picture: string
  accessToken: string
}
//#endregion

//#region Functions
export const onAuthenticated = (authData: any) => {
  setHeader('Authorization', `Bearer ${authData.token}`)
}
//#endregion

//#region Mutations
export const loginLocal = async ({email, password}: ILocalLoginPayload) => {
  const result = await mutate({operator: 'login', variables: {email, password}})
  onAuthenticated(result)
  return result
}

export const authFacebook = async (payload: IFacebookLoginPayload) => {
  const result = await mutate({operator: 'authFacebook', variables: payload})
  onAuthenticated(result)
  return result.authFacebook.user
}
//#endregion
