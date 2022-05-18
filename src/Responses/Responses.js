import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';

const Responses = () => {
  const { responses } = useContext(MyContext)

  const displayResponses = 
    responses.map((response, i) => {
      return (
        <div key={response + i} className='response'>
          <p className='prompt-text'>Prompt: {response.prompt}</p>
          <p className='response-text'>Response: {response.response}</p>
        </div>  
      )
    })
  


  return(
    <section className='responses'>
      <h2>Responses</h2>
      {responses.length > 0 && displayResponses}
      {responses.length === 0 && <p>You have no responses saved</p>}
    </section>  
  )
}

export default Responses;