import { useState } from 'react'

export default function useCounter({ initialCount = 0 } = {}) {
  const [count, setCount] = useState(initialCount)

  return [count, setCount]
}
