import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[mensaje, setMensaje] = useState ("");
  const [count2, setCount2]=useState(0);

  const superData = [{name: "Flash", descrpcion:"very fast wow"},{name:"batman", descrpcion:"darkknight"}];
  const [listaSups, setListaSups] =useState(superData)
  const agregarSups = (name,descrpcion)=>{
    setListaSups([...listaSups, {name, descrpcion}, {name, descrpcion}, {name, descrpcion}, {name, descrpcion}])
  }

  const contar2=()=>{
    setCount2(previous => previous +1 )
    setCount2(previous => previous +1 )
  }
  return (
    <>
    <h1>contador</h1>
    <p>{count} </p>
    <button onClick = {()=> setCount(count + 1)} >Contar</button>
    
    <hr />
    <h1>Mensaje</h1>
    <p>{mensaje}</p>
    <button onClick={()=> setMensaje("Holis!") } ></button>
    <hr />
    {listaSups.map((superx, index)=> <div><p>{superx.name}</p><p>{superx.descrpcion}</p></div>)}
    <button onClick={()=> agregarSups("incognito", "Who are you bro") } > Supers add</button>
    {/*  <button onClick={()=> setListaSups([...listaSups,{name:"inco", descrpcion:"someone??"}])} > Supers add</button> */}
    
    <h1>eeeee hook asincronico</h1>
    <h1>contador:</h1>
    <p>{count2} </p>
    <button onClick={()=> contar2()} > contar</button>
    </>
  )
}

export default App
