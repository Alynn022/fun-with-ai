import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import './SelectBox.css';

const SelectBox = () => {
  const { engine, setEngine } = useContext(MyContext)

  const handleChange = (e) => {
    setEngine(e.target.value)
  }  

  return(
    <div className='select-box'>
      <label>
        Pick your AI engine:   
        <select value={engine} onChange={handleChange}>
          <option value="text-curie-001">Currie</option>
          <option value="text-babbage-001">Babbage</option>
          <option value="text-ada-001">Ada</option>
          <option value="text-davinci-002">Davinci</option>
        </select>
      </label>
    </div>
  )
}

export default SelectBox; 