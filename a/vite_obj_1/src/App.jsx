import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Onclick</h1>
    <button onClick={()=> console.log ("Hola si funcio")}>Clickclack</button>
    <button onClick={()=>alert("si Funcio")}>click</button>
    <hr />
    <h1>OnmouseEnter & OnMouseOut</h1>
    <div style={{border:"1px solid white", height:"2rem"}} onMouseEnter={()=> console.log ("adenreo")} on onMouseOut={()=> console.log ("afuera")} ></div>
    {/* <hr />
    <h1>Onchange</h1>
    <label htmlFor="gender">Genero</label>
    <select name="gender" id="gender" onChange={()=> alert("genra change")}>
    <option value="Female ">Female</option>
    <option value="Male ">Male</option>
    <option value="other ">Other</option></select> */}
    
    <h1>Onchange</h1>
    <label htmlFor="gender">Genero</label>
    <select name="gender" id="gender" onChange={()=> alert(`Seleccionaste: ${e.target.value}`)}>
    <option value="Female ">Female</option>
    <option value="Male ">Male</option>
    <option value="other ">Other</option></select>
    </>
  )
}

export default App
