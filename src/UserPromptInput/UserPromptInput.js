import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import getPrompt from '../apiCalls/apiCalls';
import './UserPromptInput.css';
import SelectBox from '../SelectBox/SelectBox';

const UserPromptInput = () => {
  const { userInput, setUserInput } = useContext(MyContext)
  const { responses, setResponses } = useContext(MyContext)
  const { engine } = useContext(MyContext)

  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  
  const saveResponse = () => {
    if (userInput !== '') {
      getPrompt(userInput, engine)
      .then(data => {
        console.log(data)
        setResponses([{
          prompt: userInput, 
          response: '', 
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
        <SelectBox/>
        <button className='submit-btn' onClick={() => saveResponse()} >Submit</button>
      </section>
    </div>  
  )
}

export default UserPromptInput;