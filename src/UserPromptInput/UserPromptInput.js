import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/Context';
import getPrompt from '../apiCalls/apiCalls';
import './UserPromptInput.css';
import SelectBox from '../SelectBox/SelectBox';
import Loader from '../Loader/Loader';


const UserPromptInput = () => {
  const { userInput, setUserInput } = useContext(MyContext)
  const { responses, setResponses } = useContext(MyContext)
  const { engine } = useContext(MyContext)
  const [ isLoading, setIsLoading ] = useState(false)


  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  
  const saveResponse = () => {
    setIsLoading(true)
    if (userInput !== '') {
      getPrompt(userInput, engine)
      .then(data => {
        setIsLoading(false)
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
        {!isLoading && 
          <>
            <textarea
              id='enterPrompt'
              type='text'
              value={ userInput }
              onChange={ handleChange }
              aria-label='Enter-Prompt'
            /> 
            <SelectBox/>
            <button className='submit-btn' onClick={() => saveResponse()} >Submit</button>
          </>
        }
        {isLoading && <Loader/>}
      </section>
    </div>  
  )
}

export default UserPromptInput;