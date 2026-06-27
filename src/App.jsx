import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const[count,setCount]= useState(0)
  return (
    <div>
      <h1 id="header">COUNTER APP</h1>

      <div id='count'>
      <h2 >Current count</h2>
      <h1 >{count}</h1>
      </div>

      <button className='buttons' onClick={()=> setCount(count+1)}>Increment ➕</button>
      <button className='buttons' onClick={()=> setCount(0)}>Reset to 0</button>
      <button className='buttons' onClick={()=> setCount(count-1)}>Decrement ➖</button>

      <i><h5 id='footer'>Made with React⚛️🤍</h5></i>
    </div>
  )
}

export default App