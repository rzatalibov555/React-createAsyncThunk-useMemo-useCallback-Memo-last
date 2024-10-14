import React, { useState } from 'react'

const NonMemoize = () => {

    const [count, setCount] = useState(0)
    const [test, setTest] = useState("hello")
    const handdleClick = () => {
        setCount((prev) => prev + 1)
    }

    const calcSum = () => {
        let sum = 0;
        for(let i = 0; i < 10000000; i++){
            sum += i
        }
        console.log("NonMemoize: "+sum)
        return sum;
    }

    const handdleClick3 = () => {
        setTest("Hi")
    }

  return (
    <div>
      <h2>Non memoized Component</h2>
      <p>Count: {count}</p>
      <button onClick={handdleClick}>Increment Count</button>
      <p>Sum: {calcSum()}</p>
      <button onClick={handdleClick3}>handdleClick3</button>
      <p>{test}</p>
    </div>
  )
}

export default NonMemoize
