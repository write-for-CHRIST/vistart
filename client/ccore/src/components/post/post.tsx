import * as React from 'react'
import styled from 'styled-components/primitives'

const Container = styled.View`
  width: 100%;
`

const Header = styled.Text`
  color: #f3f3f3;
  font-size: 18px;
`

const Body = styled.Text`
  font-size: 14px;
  font-weight: light;
`

export const Post = ({header, body}: {header: string, body: string}) => (
  <Container>
    <Header>{header}</Header>
    <Body>{body}</Body>
  </Container>
)
