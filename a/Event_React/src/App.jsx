import { useState } from 'react'
import './App.css'
import DetalleListaProps from './components/DetalleListaProps'
import DetalleLista from './components/DetalleLista'

function App() {
  let persona = { 
  nombre: "emmy",
  apellido : "elis",
  edad: 26}

  let arrayTest = [1,4,5,6]

  return (
    <>
    <ul> <DetalleLista nombre="Camil" apellido="Lobos"/>
      <DetalleListaProps nombre="mica" apellido="Luzria" edad = {20}/>
      <DetalleListaProps nombre={persona.nombre} apellido= {persona.apellido} edad= {persona.edad}/>
    </ul>
    <p>
      {arrayTest}
    </p>
    <ul>
      {arrayTest.map (numero => {
        return <li>{numero}</li>
      })}
    </ul>
    </>
  )
}

export default App
