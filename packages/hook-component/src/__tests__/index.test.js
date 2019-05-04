import Hook from '../index'
import React from 'react'
import { render } from 'react-testing-library'

test('it supports hooks in children', () => {
  expect(() => {
    render(
      <Hook>
        {() => {
          let [count] = React.useState(3)
          return count
        }}
      </Hook>,
    )
  }).not.toThrowError()
})
