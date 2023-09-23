import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  //useState Hook used:
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [password, setPassword] = useState("")

  //useRef Hook:
  const passwordRef = useRef(null)

  //Function passwordGenerator() here useCallback Hook is used for opimization pupose only.
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (characterAllow) str += "!@#$%^&*()_-+=[]{}`~"
    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      setPassword(pass)
    }
  }, [length, numberAllow, characterAllow, setPassword]);

  //Copy Password Function:
  const copyPasswordToClipBoard = useCallback(() => {
    //select the password
    passwordRef.current?.select();
    //If you want to copy to specific Characters use range in the below code
    // passwordRef.current?.setSelectionRange(10,20);
    
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect(fn,[]) Hook: when a pge reload it will call automatically and any values given  in the array changes it will again run.
  useEffect(() => {passwordGenerator()},[length, numberAllow, characterAllow, passwordGenerator]);

  //HTML Part:
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
        <h1 className='text-center text-2xl pb-2 my-3 text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1  px-3' 
          placeholder='Password' 
          readOnly
          ref={passwordRef} 
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipBoard}
          >Copy</button>
        </div>
        <div className='flex flex-wrap text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 m-1'>
            <input type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 m-1'>
            <input type="checkbox"
            id='numberInput'
            defaultChecked ={numberAllow} 
            className='mr-auto cursor-pointer' onClick={()=>{setNumberAllow((prev) => !prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 m-1'>
            <input type="checkbox"
            id='characterInput'
            defaultChecked ={characterAllow} 
            className='mr-auto cursor-pointer' onChange={() => {setCharacterAllow((prev) => !prev)}}/> 
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
