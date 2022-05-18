import React, { useContext, useEffect } from 'react';
import { MyContext } from '../Context/Context';
import getPrompt from '../apiCalls/apiCalls';

const Responses = () => {
  const { userInput } = useContext(MyContext)
  const { prompt, setPrompt } = useContext(MyContext)
  
  useEffect(() => {
    if (userInput !== '') {
      getPrompt(userInput)
      .then(data => {
        setPrompt({
          text: data.choices[0].text
        })        
      })
    }
  }, [])




  return(
    <section className='responses'>
      <h2>Responses</h2>
      <p>{prompt}</p>
    </section>  
  )
}

export default Responses;