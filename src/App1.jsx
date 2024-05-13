import { useState } from 'react'

import DemoUseState from './components/DemoUseState'
import Todo from './components/Todo'
import DemoUseEffect from './components/DemoUseEffect'
import {createContext} from 'react'
import A from './components/A'
import B from './components/B'
import D from './components/D'
export const createContex = createContext();
export const createContex1 = createContext();
function App() {
  const [fullName,setFullName] = useState("Phạm Tuần Bình");
  const changeFullName = (newFullName)=>{
      setFullName(newFullName);
  }
  return (
    <>
      {/* <DemoUseState></DemoUseState> */}
      {/* <Todo></Todo> */}
      {/* <DemoUseEffect></DemoUseEffect> */}
      <createContex.Provider value={{fullName,changeFullName}}>
          <A></A>
          <B></B>
      </createContex.Provider>
      <createContex1.Provider>
        <D></D>
      </createContex1.Provider>
    </>
  )
}

export default App
