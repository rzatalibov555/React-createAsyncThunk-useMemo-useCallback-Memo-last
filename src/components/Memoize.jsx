import React, { useCallback, useMemo, useState } from 'react'

const Memoize = () => {

    const [count, setCount] = useState(0)
    const [test, setTest] = useState("hello")

    const handdleClick2 = useCallback(() => {
        setCount((prev) => prev + 1)
    },[])

    const handdleClick3 = useCallback(() => {
        setTest("Hi")
    },[])

    const calcSum2 = useMemo(() => {
        let sum = 0;
        for(let i = 0; i < 100; i++){
            sum += i
        }
        console.log("Memoize: "+sum)
        return sum;
    },[test])

  return (
    <div>
      <h2>Non memoized Component</h2>
      <p>Count: {count}</p>
      <button onClick={handdleClick2}>Increment Count</button>
      <p>Sum: {calcSum2}</p>
      <button onClick={handdleClick3}>handdleClick3</button>
      <p>{test}</p>
    </div>
  )
}

export default Memoize
