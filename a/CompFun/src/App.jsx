import { useState } from 'react'
import './App.css'
import SupForm from './components/SupForm'


function App() {
  const[listaSups, setListaSups] = useState([])
  return (
    <>
    <header></header>
    <main>
    <SupForm listaSups={listaSups} setListaSups={setListaSups} />
    </main>
    <footer>
      <table>
        <thead><tr>
          <th>name</th>
          <th>lastname</th>
          <th>email</th>
          </tr>
          </thead>
          <tbody>
            {listaSups.map((sup,index)=>
            <tr>
              <td>{sup.name} </td>
              <td>{sup.lastName} </td>
              <td>{sup.email} </td>
            </tr>)}
          </tbody>
      </table>
    </footer>
    </>
  )
}

export default App
