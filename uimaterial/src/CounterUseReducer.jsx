import React, { useReducer } from 'react'

export default function CounterUseReducer() {
    const initialstate=0;
    const reducer=(state,action)=>{
        switch(action){
            case "Increment":return state+1
            case "Decrement":return state-1
            default :return state
        }
    }
    const[count,dispatch]= useReducer(reducer,initialstate)

  return (

    <div>
        <div>{count}</div>

        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </div>
  )
}
