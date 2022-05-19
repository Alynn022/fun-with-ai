import React, { createContext, useState } from 'react';

const MyContext = createContext()

const MyProvider = props => {
  const [ userInput, setUserInput ] = useState('')
  const [ responses, setResponses ] = useState([]) 
  const [ engine, setEngine ] = useState('text-curie-001')

  return (
    <MyContext.Provider value={{
      userInput, setUserInput,
      responses, setResponses,
      engine, setEngine
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export { MyContext, MyProvider }