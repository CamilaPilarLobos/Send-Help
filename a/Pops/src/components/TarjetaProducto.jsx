const TarjetaProducto = (props) =>{
    return <div className="tarjeta">
    <p>{props.nombre}</p>
    <p>{props.precio}</p>
    <p>{props.descripcion}</p>
    <p>{props.Stock}</p>
    </div>
}
export default TarjetaProducto