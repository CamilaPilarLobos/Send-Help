import axios from 'axios';
import { useEffect,useState} from 'react';

const ExtractData =({setImg})=>{

const Extract = async ()=>{

    const URL = 'https://api.thecatapi.com/v1/images/search' ;
    axios.get(URL).then (response => {
        setImg(response.data[0].url);
    })
        .catch(e => {
            console.error("Error fetching image:", e);
        });
    };

    useEffect (() => { console.log('Component mounted');
    }, []);

return(
    <div>
        <button onClick={Extract}>Obten tu imagen</button>
    </div>
)
}

export default ExtractData
