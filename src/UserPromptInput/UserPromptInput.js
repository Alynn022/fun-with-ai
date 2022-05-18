import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import getPrompt from '../apiCalls/apiCalls';

const UserPromptInput = () => {
  const { userInput, setUserInput } = useContext(MyContext)
  const { responses, setResponses } = useContext(MyContext)

  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  
  const saveResponse = () => {
    getPrompt(userInput)
    .then(data => {
      setResponses([{
        prompt: userInput, 
        response: data.choices[0].text, 
      }, ...responses])        
    })
    setUserInput('')
  }

  return(
    <section className='prompt'>
      <p>Enter Prompt</p>
      <input
        type='text'
        value={ userInput }
        onChange={ handleChange }>
      </input>
      <button onClick={() => saveResponse()} >Submit</button>
    </section>
  )
}

export default UserPromptInput;