import React, { useContext } from 'react'
import { createContex } from '../App1'

export default function B() {
    const {fullName,changeFullName} = useContext(createContex);
    const changeText = (event)=>{
        let newName = event.target.value;
        changeFullName(newName)
    }
  return (
    <>
        <div>B : {fullName}</div>
        <input onChange={changeText} value={fullName} />
    </>
  )
}
