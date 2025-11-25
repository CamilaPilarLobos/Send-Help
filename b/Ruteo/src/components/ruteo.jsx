import { Link } from "react-router-dom"

const Home = ({galeryList})=> {
    return(
        <>
        <h1>Galeria de arte </h1>
        <ul>
            {galeryList.map((art,index )=> <li key={index}> <Link to= {`/art/${index}`}> {art.name} </Link> </li>) }
        </ul>
        </>
    )
}
export default Home