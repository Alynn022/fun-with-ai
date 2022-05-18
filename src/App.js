import React from 'react';
import './App.css';
import UserPromptInput from './UserPromptInput/UserPromptInput';
import Responses from './Responses/Responses.js';


const App = () => {
  return (
    <main>
      <h1>Fun with AI</h1>
      <UserPromptInput/>
      <Responses/>
    </main>
  )
}

export default App;
