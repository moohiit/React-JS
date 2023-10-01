import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'
function App() {
  

  return (
    <Provider store={store}>
      <h1 className=' text-3xl'>Todo List App Using React + Redux-toolkit</h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
