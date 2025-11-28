
import { useState } from 'react';
import './App.css'
import ExtractData from './components/ExtractData';

function App(){
  
    
    const [img, setImg] = useState ("");
  return (
    <>
    <h1> Random Image of a Cat :3</h1>
    {img && <img src={img} alt="random" ></img> }

    <ExtractData setImg={setImg} />
    </>
  )
}

export default App
