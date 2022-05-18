import React, { createContext, useState } from 'react';

const MyContext = createContext()

const MyProvider = props => {
  const [ userInput, setUserInput ] = useState('')
  const [ responses, setResponses ] = useState([]) 

  return (
    <MyContext.Provider value={{
      userInput, setUserInput,
      responses, setResponses
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export { MyContext, MyProvider }