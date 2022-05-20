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
  const [ error, setError ] = useState('')


  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  
  const saveResponse = () => {
    setIsLoading(true)
    getPrompt(userInput, engine)
    .then(data => {
      setIsLoading(false)
      setResponses([{
        prompt: userInput, 
        response: data.choices[0].text, 
      }, ...responses])        
    })
    .catch((response) => {
      if (response.status < 500) {
        setError(`We're sorry, something went wrong. Either the page doesn't exist, or could not be found.`)
      } else {
        setError(`We're sorry, something went wrong with the server. Please try again later`)
      }
    }) 
    setUserInput('')
  }

  const errorMessage = () => {
    if(error) {
      return(
        <p className='error-message'>{error}</p>
      )
    }
  }

  return(
    <div>
      <p className='enter-prompt-label'>Enter Prompt</p>
      <section className='prompt'>
        {errorMessage()}
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
            <button className='submit-btn' disabled={userInput === ''} onClick={() => saveResponse()} >Submit</button>
          </>
        }
        {isLoading && <Loader/>}
      </section>
    </div>  
  )
}

export default UserPromptInput;