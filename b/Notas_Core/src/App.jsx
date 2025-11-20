import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import './App.css'
import NotesForm from './components/NotesForm'
import {use, useState } from 'react'
import Filter from './components/Filter'
import Note from './components/Note'

function App() {
  const[listnotes, setlistNotes] = useState([])
  const[filter, setFilter]= useState('')

  const listFiltered = !filter? listnotes :listnotes.filter(note=> note.priority==filter) 

  return (
    <div className='card' >
        <div className='Card-header'>
          <h1>Notas</h1>
          <NotesForm listnotes={listnotes} setlistNotes={setlistNotes} />
        </div>
        <hr />
        <div className='Card-body'>
          <Filter filter={filter} setFilter={setFilter} />

          {listFiltered.map ((note,index)=><Note note={note.note} priority= {note.priority} listnotes={listnotes} setlistNotes={setlistNotes} index={index}/> )  }
        </div>
        <div className='Card-footer'></div>
        <hr />
    </div>
  )
}

export default App
