import 'react-native'
import React from 'react'
import Input from './'

import renderer from 'react-test-renderer'

test('renders without crashing', () => {
  const tree = renderer.create(<Input placeholder="Hello World" />).toJSON()
  expect(tree).toMatchSnapshot()
})
