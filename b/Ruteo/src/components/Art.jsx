import { useNavigate, useParams } from "react-router-dom"
import styles from './../css/art.module.css'

const ArtP = ({galeryList})=>{
    const params = useParams ();
    const idParams = Number(params.id)
    const navigate = useNavigate();

    const artp = galeryList.find ((art,index) => index === idParams)

    if (!artp){
        return<p>no encontre la obra de arte artistica</p>
    }
    const anterior = ( )=> {
        if ( idParams===0  ){
            navigate('/home')
            return;
        }
        navigate(`/art/${idParams - 1}`)
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
        <h1> {artp.name} </h1>
        <img className={styles.img} src={artp.img} alt={artp.name} />
        <div>
            <button className={ styles.btns} onClick={()=> navigate(`/art/${idParams-1}`)}  disabled={idParams===0}> anterior</button>
            <button className={ styles.btns} onClick={()=> navigate(`/home`)} >Inicio</button>
            <button className={ styles.btns} onClick={()=> navigate(`/art/${idParams+1}`)}  disabled={idParams===(galeryList.length -1)}> Siguiente</button>
        </div>
        </>
    )
}
export default ArtP