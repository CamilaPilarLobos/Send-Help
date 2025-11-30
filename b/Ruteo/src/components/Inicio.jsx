import { Link } from "react-router-dom"
import styles from './../css/inicio.module.css'


const Home = ({galeryList})=> {
    return(
        <>
        <h1>Galeria de arte </h1>
        <ul>
            {galeryList.map((art,index )=> 
                <li key={index} className={styles.list} > <Link to= {`/art/${index}`}> {art.name} </Link> </li>) 
                }
        </ul>
        </>
    )
}
export default Home