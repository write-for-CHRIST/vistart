import gql from 'graphql-tag'

export const mutationLogin = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      profile {
        name
      }
      token
    }
  }
`

export const mutationSignup = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
    }
  }
`