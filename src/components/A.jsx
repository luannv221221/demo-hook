import React, { useContext } from 'react'
import { createContex } from '../App1';
import B from './B';

export default function A() {
    const {fullName} = useContext(createContex);
    console.log(fullName);
  return (
      <>
      <div>A : {fullName}</div>
    </>
  )
}
