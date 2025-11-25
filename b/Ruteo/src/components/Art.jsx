import { useNavigate, useParams } from "react-router-dom";

const ArtP = ({})=>{
    const params = useParams ();
    const idParams = Numer (params.id)
    const navigate = useNavigate();

    const artp = galeryList.find ((art,index) => index === idParams)

    const anterior = ( )=> {
        if ( idParams==0  ){
            navigate('/home')
            return;
        }
        navigate(`/art/${idParams-1}`)
    }
    const siguiente = ()=> {
        if ( idParams == ( galeryList.length  -1)){
            navigate('?/home/')
            return;
        }
        navigate(` /art/ ${idParams +1}`)
    }
    return(
        <>
        <h1> {art.name} </h1>
        <img src={artp.img} alt={artp.name} />
        <div>
            <button onClick={()=> navigate(`/art/${idParams-1}`)}  disabled={idParams===0}> anterior</button>
            <button onClick={()=> navigate(`/home`)} >Inicio</button>
            <button onClick={()=> navigate(`/art/${idParams+1}`)}  disabled={idParams===(galeryList.length -1)}> Siguiente</button>
        </div>
        </>
    )
}
export default ArtP