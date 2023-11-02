import React from 'react'
import useCounter from './useCounter'

export default function Counter() {
    const[count,increment,decrement]=useCounter()

  return (
    <div  className='App'>
        <div>
            <div>{count}</div> <br/>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
        </div>

    </div>
  )
}
