const products = [
    {id: 1, nombre: "Camisa", prcio: 20},
    {id: 2, nombre: "Pantalon", prcio: 30},
    {id: 3, nombre: "Zapatos", prcio: 50},
];
Object.freeze(products);
//products.push ({id: 4, nombre: "sombrero", precio:24});
console.log(products);

const persona = Object.freeze ({nombre: "Juan" , edad: 30});
persona.edad= 31 ;
console.log(persona)

const listaCanciones = Object.freeze([
    {"nombre": "shape of you", "genero":"Pop"},
    {"nombre": "Up town funk", "genero":"Funk"},
    {"nombre": "Billie Jean", "genero":"Pop"},
]);
const necesitoNuevaCancion = [... listaCanciones, {"nombre": "dont stop Belivin", "genero": "rock"}];
const otraNuevaCancion = listaCanciones.concat({"nombre": "bohemia rapsodiy", "genero": "Rock" });
console.log (listaCanciones);
console.log (necesitoNuevaCancion);
console.log (otraNuevaCancion);

const listaRecortada = listaCanciones.slice(0,2);
console.log (listaRecortada);

const listaConciones = Object.freeze(["despacito", "shape of you", "uptownfunk"]);
const listaOrdenadaa = [...listaConciones].sort();
console.log (listaOrdenadaa)

const listacancionesordenada = [...listaConciones].sort  ((a,b)=> (a.nombre>b.nombre)? 1:-1);
console.log  (listacancionesordenada);