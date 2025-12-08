import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormSongs = ({listasSongs, setListasSongs})=>{
    const [data, setData] = useState({
        title : "",
        artist : "",
        yearOfRealease : 0,
        genero : ""
    })
    const [errors, setErrors] = useState(
        {

        }
    )
    const navigate = useNavigate();

    const updateState = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const addSong = (e) =>{
        e.preventDefault();
        const URL = 'http://localhost:8090/api/canciones'

        axios.post(URL,data).then(
            response => {
                setListasSongs([...listasSongs, response.data])
                navigate('/canciones')
            }
        ).catch(
            e=>
                setErrors(e.response.data.errors)
        )
    }

    return(
        <form onSubmit={(e) =>addSong(e) }>
            <div>
                <label htmlFor="title" >Titulo:</label>
                <input type="text" name="title" id="title" value={data.title} onChange={(e)=>{ updateState(e)}} />
                {errors.title  && <p style={{color : "red"}}>{errors.title}</p>}
            </div>
            <div>
                <label htmlFor="artist" >Artista:</label>
                <input type="text" name="artist" id="artist" value={data.artist}  onChange={(e)=>{ updateState(e)}}/>
                {errors.artist  && <p style={{color : "red"}}>{errors.artist}</p>}
            </div>
            <div>
                <label htmlFor="yearOfRealease" >Lanzamiento:</label>
                <input type="text" name="yearOfRealease" id="yearOfRealease" value={data.yearOfRealease}  onChange={(e)=>{ updateState(e)}}/>
                {errors.yearOfRealease  && <p style={{color : "red"}}>{errors.yearOfRealease}</p>}
            </div>
            <div>
                <label htmlFor="genero" >Genero:</label>
                <input type="text" name="genero" id="genero"  value={data.genero}  onChange={(e)=>{ updateState(e)}}/>
                {errors.genero  && <p style={{color : "red"}}>{errors.genero}</p>}
            </div>
            <button>Enviar</button>
        </form>
    )
}

export default FormSongs;