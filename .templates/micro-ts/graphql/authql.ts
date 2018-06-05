import gql from 'graphql-tag'

export const mutationLogin = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        profile {
          name
        }
      }
      token
    }
  }
`

export const mutationSignup = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      user {
        profile {
          name
        }
      }
      token
    }
  }
`

export const mutationFacebookAuth = gql`
  mutation authFacebook(
    $email: String!
    $facebook: String!
    $name: String!
    $picture: String!
    $accessToken: String!
  ) {
    authFacebook(
      email: $email
      facebook: $facebook
      name: $name
      picture: $picture
      accessToken: $accessToken
    ) {
      user {
        profile {
          name
        }
      }
      token
    }
  }
`
