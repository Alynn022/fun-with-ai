import React, { createContext, useState } from 'react';

const MyContext = createContext()

const MyProvider = props => {
  const [ userInput, setUserInput ] = useState('')
  const [ prompt, setPrompt ] = useState() 


  return (
    <MyContext.Provider value={{
      userInput, setUserInput,
      prompt, setPrompt
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export { MyContext, MyProvider }