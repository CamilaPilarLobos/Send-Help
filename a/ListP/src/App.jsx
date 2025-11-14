import { useState } from 'react'
import Persona from './components/Persona'
import './App.css'
function App() {
  let people = [{name : "Kevin", edad : 35}, {name: "Iris", edad: 23}, {name: "Camila", edad: 18}]

  return (
    <>
      <header></header>
      <main>
        {people.map(persona => 
          {
            return <Persona nombre={persona.name} 
            edad={persona.edad}/>
          }
        )}
      </main>
      <footer></footer>
    </>
  )
}

export default App