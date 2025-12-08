import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";  
import { useEffect, useState } from "react";

const UpdateSongsForm = ({listasSongs, setListasSongs})=> {
    const navigate = useNavigate(); 
    const emptyDefault = {
        title: "",
        artist: "",
        yearOfRealease: "",
        genero: ""
    }
    const {id} = useParams();

    const index = listasSongs.findIndex((song)=> song._id==id)

    const [data, setData] = useState({...emptyDefault})
    const [errors, setErrors] = useState({})

    const UpdateState = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const updateSong = (e)=> {
        e.preventDefault();


        const URL = `http://localhost:8090/api/canciones/${id}`
        axios.put(URL,data).then(
            response => {
                const copyListaSong = [...listasSongs]
                copyListaSong[index] = response.data;
                setListasSongs(copyListaSong)

                navigate(`/canciones/${id}`)
                
            }
        ).catch(
            e=> setErrors(e.response.data.errors)
        )

    }


    useEffect(()=>{
        const newArray = listasSongs.find((song)=> song._id==id)
        setData(newArray ? {...newArray} : {...emptyDefault})
    },[listasSongs,id])

    useEffect (()=> {      
        const newArray= listasSongs.find((song) => song._id == id)
        setData(newArray? {...newArray} : emptyDefault);
    }, [listasSongs, id])
    return(
        <form onSubmit={e=> updateSong(e)}>
            <div>
                <label htmlFor="title" >Titulo:</label>
                <input type="text" name="title" id="title" value={data.title} onChange={(e)=>{ UpdateState(e)}} />
                {errors.title  && <p style={{color : "red"}}>{errors.title}</p>}
            </div>
            <div>
                <label htmlFor="artist" >Artista:</label>
                <input type="text" name="artist" id="artist" value={data.artist}  onChange={(e)=>{ UpdateState(e)}}/>
                {errors.artist  && <p style={{color : "red"}}>{errors.artist}</p>}
            </div>
            <div>
                <label htmlFor="yearOfRealease" >Lanzamiento:</label>
                <input type="text" name="yearOfRealease" id="yearOfRealease" value={data.yearOfRealease}  onChange={(e)=>{ UpdateState(e)}}/>
                {errors.yearOfRealease  && <p style={{color : "red"}}>{errors.yearOfRealease}</p>}
            </div>
            <div>
                <label htmlFor="genero" >Genero:</label>
                <input type="text" name="genero" id="genero"  value={data.genero}  onChange={(e)=>{ UpdateState(e)}}/>
                {errors.genero  && <p style={{color : "red"}}>{errors.genero}</p>}
            </div>
            <button>Enviar</button>
        </form>
    )
}


export default UpdateSongsForm