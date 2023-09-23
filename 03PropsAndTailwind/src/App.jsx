import { useState } from 'react'
import Card from './components/card'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card userName='Arun Patel' btnText='Visit me'/>
      <Card userName='Anshika Patel' btnText='Click here'/>
      <Card userName='Ankita Patel' btnText='Click here'/>
    </>
  )
}

export default App
