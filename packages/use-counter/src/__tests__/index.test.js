import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import useCounter from '../index.js'

test('it works', () => {
  function Test() {
    const [count, setCount] = useCounter()
    return <button onClick={() => setCount(c => c + 1)}>{count}</button>
  }
  const { container } = render(<Test />)

  fireEvent.click(container.querySelector('button'))
  expect(container.querySelector('button').innerHTML).toBe('1')
})

test('it supports an initial count', () => {
  function Test() {
    const [count, setCount] = useCounter({ initialCount: 5 })
    return <button>{count}</button>
  }
  const { container } = render(<Test />)

  expect(container.querySelector('button').innerHTML).toBe('5')
})
