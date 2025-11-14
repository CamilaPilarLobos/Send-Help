// const DetalleListaProps = ({nombre, apellido}) => {
//     return <li>Hola! mi nombre es {nombre} {apellido}</li>
// }
const DetalleListaProps = (props) => {
    const {nombre, apellido, edad} = props;
    return <li> Holis! mi nombre es {nombre} {apellido} y tengo {edad}</li>
}


export default DetalleListaProps