import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageBtn from './components/MessageBtn';
import MessageInput from './components/MessageInput';
import Reply from './components/Reply';
import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();

function App() {

  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleChange = (event) =>{

    setInputText(event.target.value)
  }
  
  const handleClick = () =>{

    axios.post(`http://${process.env.BASE_URL}:${process.env.PORT}/api/v1/chat`,
      {
        question: inputText 
      }
    ).then((res) =>{

      setDisplayText(res);

    }).catch((err) => console.log(err));
  }

  return (
    <>
        <Reply response={displayText}/>
        <MessageInput value={inputText} onChange={handleChange} placeholder={"Type Something..."} />
        <MessageBtn name={"Send"} onClick={handleClick}/>
    </>
  )
}

export default App
