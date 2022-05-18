import React, { useEffect, useState } from 'react';
import './App.css';
import getData from './apiCalls/apiCalls';

const App = () => {
const [ prompt, setPrompt ] = useState()

useEffect(() => {
  getData()
  .then(data => 
    setPrompt(data))
}, [])

console.log(prompt)

  return (
    <main>
      <p>Hello, world!</p>
    </main>
  )
}

export default App;
