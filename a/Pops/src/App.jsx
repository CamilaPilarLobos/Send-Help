import { useState } from 'react'
import './App.css'
import TarjetaProducto from './components/TarjetaProducto'

function App() {
  let tarjeta = [{nombre : "laptop", precio: "500", descripcion : "desdcr", Stock : "yes" }]

  return (
    <>
    <header></header>
    <main>
        {tarjeta.map(tarjeta => 
          {
            return <Persona nombre={tarjeta.name} 
            edad={tarjeta.edad} descripcion={tarjeta.descripcion} Stock={tarjeta.Stock} />
          }
        )}
      </main>
      <footer></footer>
    </>
  )
}

export default App
