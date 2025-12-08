import { Link } from "react-router-dom";

const ListaCanciones = ({ listasSongs  }) => {
    return (
        <div>
            <ol>
                {listasSongs .map((song, index) => (
                    <li key={index}>
                        <Link to={`/canciones/${song._id}`}>{song.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ListaCanciones;
