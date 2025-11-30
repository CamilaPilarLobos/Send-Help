import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ArtP from './components/Art'
import Home from './components/Inicio'



function App() {

  const galeryList = [
    {name: 'Snoopys Chrismas', author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWo3dHZrdDE2MXl5cXl0MGxxdjJmMWdnNzYxdGgxNnpiMGo3ZGdkNSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/VKwspRV2pafJu/giphy.gif' }, 
    {name: 'Hell of a Hades',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWo3dHZrdDE2MXl5cXl0MGxxdjJmMWdnNzYxdGgxNnpiMGo3ZGdkNSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/bQCWmEgKHasZG/giphy.gif' },
    {name: 'Pop en el Ojo',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjE5NGNpc3pqejRxNGc1OXUzM2piZ2Q1eDZtNHo1bm5ya3BraGUxNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vrcoalzSZ7ivu/giphy.gif' }, 
    {name: 'El corazon de Howl', author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNng5ZHptcGY0cDV0cXVndGlxcG0wd3ozZjJidG9maDFuM3RhMHZ2ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Sp7IpE95BqzOU/giphy.gif' }, 
    {name: 'El gato de Kiki',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aDRscml2MjlvNGloZjBtdm56czdibXNxd20xa2Z0OXN6M2phcHVzdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NgLoh3JrzsReo/giphy.gif' },  
    {name: 'Cartas Cartas!',  author: 'Someone', img:'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJzOHZ6NzlqemU2aGJtNTdnajFzenZ1dzhmazNmeDVpeWthNjlveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kz64C06r8GDBu/giphy.gif' }, 
    {name: 'Espectaculo de la Galaxia',  author: 'Someone', img:'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NjI4MHRsNHN2ODVyeTFkbzd0N2VwcGRvYmw4b2pzZnk1bGc2ZHRtNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13XnY8y7DeiXN6/giphy.gif' }, 
    {name: 'Un Creeper en el baño?',  author: 'Someone', img:'https://media.giphy.com/media/ekH0Eyio8f3tUx7DSX/giphy.gif' }

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
