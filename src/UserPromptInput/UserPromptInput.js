import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import getPrompt from '../apiCalls/apiCalls';
import './UserPromptInput.css';

const UserPromptInput = () => {
  const { userInput, setUserInput } = useContext(MyContext)
  const { responses, setResponses } = useContext(MyContext)

  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  
  const saveResponse = () => {
    if (userInput !== '') {
      getPrompt(userInput)
      .then(data => {
        setResponses([{
          prompt: userInput, 
          response: data.choices[0].text, 
        }, ...responses])        
      })
      setUserInput('')
    } else {
      alert('Please enter a prompt to retrieve response.')
    }
  }

  return(
    <div>
      <p className='enter-prompt-label'>Enter Prompt</p>
      <section className='prompt'>
          <textarea
            id='enterPrompt'
            type='text'
            value={ userInput }
            onChange={ handleChange }
            aria-label='Enter-Prompt'
          /> 
        <button className='submit-btn' onClick={() => saveResponse()} >Submit</button>
      </section>
    </div>  
  )
}

export default UserPromptInput;