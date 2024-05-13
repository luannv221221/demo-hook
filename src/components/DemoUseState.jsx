import React, { useState } from 'react'

export default function DemoUseState() {
    const [count,setCount] = useState(1);

    const handleCount = (action)=>{
       setCount(count + action)
    }
  return (
    <>
        <button onClick={()=>handleCount(-1)} disabled={count==1} >-</button>
        <div>count : {count}</div>
        <button onClick={()=>handleCount(+1)}>+</button>
    </>
  )
}
