const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);

//predigo que saldra la edad y no el salario debido a que no esta definido.
//output: 30 undefined
//ah salido la edad y el undefined, debido a que el salario no esta definido dentro de la const.

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);

//predusco que se va a haber un error ya que hay variables con los mismos nombres dentro de los objetos.
// output: { a: 1, b: 4, c: 5, d: 6 }
// Se sobreescribieron las variables que compartian nombre, perdiendo el numero anterior.

const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}
verificar();

//Rari, error maybe?
//Output: 4 y error
//la unica var que esta correctamente definida dentro de const es c, que vale 4. const no esya definido correctamente.

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);
//al utilizar freeze se conjela el codigo, asique el cambio de la eda dno seria aplicable (?)
//output: 29
// estaba en lo correcto! el object.freeze "congela" al codigo, haciendo que el cambio de datos.edad no sea posible.

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);

//Se crea un nuevo array "nuevo", utilizando de base a "original"
//output: [ 1, 2, 3 ] [ 1, 2, 3, 4 ]
// se creo un nuevo array, manteniendo el array anterior sin modificar.

const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);

//se le definen nombres a las variable declaradas dentro de frutas, Manzana siendo primera y naranja segunda.
// output: anzana - naranja
//Prediccion correcta, primera vale manzana y segunda vale naranja.

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}

//idk
// 0 1 0 1 0 1
//Prints 3 veces el numero 0 y 1 en un bucle hasta que se cumplan 3 vueltas de cada.

const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);

//combinacion! de numeros1 y numeros2
// [ 1, 2, 3, 3, 4, 5 ]
// se combinaron los arrays numeros 1 y numeros2.

const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();

//rari, soienyto que el if con el cambio para nombre y edad son nono
//output: Luis - 25
// ill be honest idk why this happend ( les soy honesta no se porque paso esto, se que no iba a funcionar correctamente pero nose pq va el luis y no el 30 whawha)

