import * as React from 'react'
import styled from 'styled-components/primitives'

const Container = styled.View`
  width: 100%;
`

const Header = styled.Text`
  color: #9c9c9c;
`

interface IAuthProps {
  header: string
}

/**
 * @render react
 * @name Auth
 * @description Authentication form.
 * @example
 * <Auth>
 * </Auth>
 */
const Auth = ({header}: IAuthProps) => {
  return (
    <Container>
      <Header>{header}</Header>
    </Container>
  )
}

export default Auth
