import { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count !== 0) {
      console.log('Count has been updated to ', count)
      // setCount(count + 1)
    }
  }, [count])

  useEffect(() => {
    console.log('Mounting time')
    const intervalId = setInterval(() => {
      console.log('Tick')
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <button
      onClick={() =>
        setCount(prevCount => {
          return prevCount + 1
        })
      }
    >
      count is {count}
    </button>
  )
}

export default Counter
