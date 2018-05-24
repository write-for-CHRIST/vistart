import React, {Component} from 'react'
import {TextInput} from 'react-native'
import styled from 'styled-components/primitives'

const StyledInput = styled.View`
  border-radius: 10;
  width: 100%;
`

class Input extends Component {
  render() {
    return (
      <StyledInput>
        <TextInput {...this.props} />
      </StyledInput>
    )
  }
}

export default Input
