import { useState } from 'react';
import './App.css';
import {Routes, Route , NavLink } from 'react-router-dom';
import ListaCanciones from './views/ListaCanciones.jsx';
import OneSong from './views/OneSong.jsx';
import FormSong from './views/FormSongs.jsx';
import SongsApi from './components/songsApi.jsx';
import UpdateSongsForm from './views/UpdateSongsFrom.jsx';
import NotFound from './components/notFound.jsx'

function App() {
  const [listasSongs, setListasSongs] = useState([]);

  return (
    <>
      <h1>MERN Music</h1>
      <SongsApi setListasSongs={setListasSongs} />
      <NavLink to="/canciones">Lista de canciones</NavLink> | 
      <NavLink to="/canciones/new">Nuevas canciones</NavLink>

        <Routes>
          <Route path="/" element={<div><p>Home</p></div>} />
          <Route path="/canciones" element={<ListaCanciones listasSongs={listasSongs} />} />
          <Route path="/canciones/:id" element={<OneSong listasSongs={listasSongs} setListasSongs={setListasSongs} />} />
          <Route path="/canciones/new" element={<FormSong listasSongs={listasSongs} setListasSongs={setListasSongs} />}/>
          <Route path="/canciones/update/:id" element={<UpdateSongsForm listasSongs={listasSongs} setListasSongs={setListasSongs}/>} />
          <Route path="*" element={ <NotFound/>} />
        </Routes>
    </>
  );
}

export default App;
