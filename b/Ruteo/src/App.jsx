import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ArtP from './components/Art'
import Home from './components/ruteo'

function App() {

  const galeryList = [
    {name: 'Fuera de este Mundo', author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }, 
    {name: 'Pacientes Holograficos',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4y6DqPvlICp5S/giphy.gif' },
    {name: 'Lo Alto de dinero',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HWLa2UnmEsc2qpYu8f/giphy.gif' }, 
    {name: 'Nada como la privacidad del hogar', author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }, 
    {name: 'Moverse en la ciudad',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' },  
    {name: 'Diversion de otro planeta',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }, 
    {name: 'Espectaculo de la Galaxia',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }, 
    {name: 'Taxista',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }

  ]
  return (
    <>
    <Routes>
      <Route path= '/Home' element={<Home galeryList={galeryList} /> }></Route>
      <Route path= '/' element={<Navigate to = "Home"/>} ></Route>
      <Route path = '/art/:id' element={ <ArtP galeryList= {galeryList}/>}></Route>
    </Routes>
    </>
  )
}

export default App
