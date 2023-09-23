import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  const [counter, setCounter] =  useState(15)
  
  //Adding the value
  const addValue = () => {
    if(counter<20){
      setCounter(counter + 1)
      console.log("Value: ",counter+1);
    }
  }

  //Adding the values multiple time in single click.
  // const addValue = () => {
  //   setCounter(prevValue => prevValue + 1)
  //   setCounter(prevValue => prevValue + 1)
  //   setCounter(prevValue => prevValue + 1)
  //   setCounter(prevValue => prevValue + 1)
  // }
  

  // Subtracting the value
  const minusValue = () => {
    // counter--
    if(counter>0){
      setCounter(counter - 1)
      console.log("Value: ",counter-1);
    }
  }

  return (
    <>
    <h1>Getting Started With A Counter App</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>
      Add Value {counter}
    </button><p>You can not exceed than 20.</p>
    <br />
    <p> </p>
    <button onClick={minusValue}>Decrease Value {counter} </button>
    <p>You can't go below the Zero (0)</p>
    </>
  )
}

export default App
