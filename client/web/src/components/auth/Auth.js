import React from 'react'
import ReactDom from 'react-dom'
import * as p from 'react-primitives'
import styled from 'styled-components/primitives'

const Container = styled.View`
  width: 100%;
`

const Header = styled.Text`
  color: #9c9c9c;
`

/**
 * @render react
 * @name Auth
 * @description Authentication form.
 * @example
 * <Auth header={"Authenticate"}>
 * </Auth>
 */
const Auth = ({header}) => {
  return (
    <Container>
      <Header>{header}</Header>
    </Container>
  )
}

export default Auth
