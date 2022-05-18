import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';

const UserPromptInput = () => {
  const { userInput, setUserInput } = useContext(MyContext)

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return(
    <section className='prompt'>
      <p>Enter Prompt</p>
      <input
        type='text'
        value={ userInput }
        onChange={ handleChange }>
      </input>
      <button>Submit</button>
    </section>
  )
}

export default UserPromptInput;