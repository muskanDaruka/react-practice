import React from 'react'
import { useState, useEffect } from 'react'

function FunctionalCounter() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    useEffect (() => {
        console.log("Counter updated", counter);
        return()=>{
            console.log("Unmount the Counter", counter);
        }
    },[counter])
  return (
    <div>
        <div>
        Counter Value: {counter}
        </div>
        <div>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>decrement</button>
        </div>
    </div>
  )
}

export default FunctionalCounter
