import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import './Responses.css';

const Responses = () => {
  const { responses } = useContext(MyContext)

  const displayResponses = 
    responses.map((response, i) => {
      return (
        <div key={response + i} className='response'>
          <div className='text'>
            <p className='prompt-text'>Prompt:</p>
            <p className='user-prompt'>{response.prompt}</p>
          </div> 
          <div className='text'>
            <p className='response-text'>Response:</p>
            <p className='user-response'>{response.response}</p>
          </div>  
        </div>  
      )
    })

  return(
    <section className='responses'>
      <p className='response-header'>Responses</p>
      {responses.length > 0 && displayResponses}
      {responses.length === 0 && <p className='no-response-text'>You have no responses saved</p>}
    </section>  
  )
}

export default Responses;