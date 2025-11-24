import axios from 'axios';
import { useEffect,} from 'react';

const ExtractData =({setImg})=>{
    
    const [imagen, setImagen] = useState ([])

const Extract = async ()=>{

    axios.get(URL).then (response => {
    const URL = 'https://dog.ceo/api/breeds/image/random' 
        setImg(response.data.message);
    })
        .catch(e => {
            console.error("Error fetching image:", e);
        });
    };

    useEffect (() => { console.log('Component mounted');
    }, []);

return(
    <div>
        {imagen  &&<img src= {imagen} alt='random image' />}
        <button onClick={Extract}>Obten tu imagen</button>
    </div>
)
}

export default ExtractData
