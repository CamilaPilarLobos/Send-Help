import axios from 'axios';
import { useEffect, useState } from 'react';

const ExtractData =()=>{
const [imagen, setImagen] = useState([])

const Extract = async ()=>{
    const URL = 'https://randomfox.ca/floof/'
    try{
        const response = await axios.get (URL);
        setImagen(response.data.image);
    }
catch (e){
    console.log ("Erorr");
}

    useEffect (() => {
        Extract();
    }, []);

return(
    <div>
        {imagen && <img src='image'></img> }
        <br />
        <button onClick={Extract}> Random imagen
        </button>
    </div>
)
}
}
export default ExtractData