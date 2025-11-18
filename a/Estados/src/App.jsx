
import './App.css'
import TarjetaProducto from './components/TarjetaProductos'

function App() {
  const productos = [
    {nombre: "Laptop", precio: 1500, descripcion: "Una potente laptop para trabajar y jugar", cantidad: 10},
    {nombre: "Smartphone", precio: 800, descripcion: "Un smarthphone de ultima generacion con una de las mejores camaras.", cantidad: 0},
    {nombre: "Auriculares", precio: 200, descripcion: "Auriculares con cancelacion de ruido. No esucharas nada a tu alrededor", cantidad: 5},
    {nombre: "Monitor", precio: 300, descripcion: "Modito 4k para una experiencia visuañ increible.", cantidad: 7}
  ]

  return (
    <>
    <div>
      <h1> TechStore - El destino para las mejores compras</h1>
    </div>
    <div className='product'>
      {productos.map((producto)=> <TarjetaProducto nombre= {producto.nombre} precio={producto.precio} descripcion={producto.descripcion} cantidad= {producto.cantidad}/> )}
    </div>
    </>
  )
}

export default App
