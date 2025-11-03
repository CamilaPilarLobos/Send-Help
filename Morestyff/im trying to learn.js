//1
for (var i=1 ; 30>=i; i++){
    console.log(i);
}

//2
for (var i=100 ; 0<=i; i--){
    if(i%4==0)
    console.log(i);}

//3
for (var i=10; i>= -5; i -= 3){
    console.log (i);
}

//4
let suma = 0;

for (let i = 0; i <= 50; i+=2) {
    suma += i;
    }

console.log(suma);

//5

let factorial=1;

for (let i =1; i<=20; i++){
    factorial *=i;
}
console.log(factorial);

//6 
comprasSemanaFeb15 =[200, 500, 200, 60,700] //esta es nuestra semana con nuestros gastos de la misma

var total = 0; // inicalmente la variable es 0 ya que no hay ningun gasto 
for(var i = 0; i < comprasSemanaFeb15.length; i++) // i=0 como nuestro total, y debe ser menor que el largo de el array de la semana
    {total += comprasSemanaFeb15[i];} //se va sumando cada gasto al total
console.log("El gasto total fue: $" + total); //total de la semana 

//7  pop and push
comprasSemanaFeb15.push(7000);
console.log(comprasSemanaFeb15);

comprasSemanaFeb15.pop ();
console.log(comprasSemanaFeb15);

//8
function siempreAburrido(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === "ver TV") {
            console.log("¡Entretenido!");
        }    
        else {
            console.log("¡Estoy Aburrido!");
        }
    }

}

siempreAburrido(["cantar", "correr", "salir", "ver TV"]);

function numerosBajoPromedio(arreglo) {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) { //
        total += arreglo[i]; //
    }
    const promedio = total / arreglo.length;//
    let numerosBajoPromedio = [];
    for (let i = 0; i < arreglo.length; i++) { //
        if (arreglo[i] < promedio) {//
            numerosBajoPromedio.push(arreglo[i]);
        }
    }
    return numerosBajoPromedio;
}
console.log(numerosBajoPromedio([1, 20, 3, 4, 15, 6, 27])); 

function arregloDeFibonacci(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}
console.log(arregloDeFibonacci(30));

var hamburguesaEspecial = {
    "pan": "pan de hamburguesa",
    "carne": "carne de res",
    "queso": "queso americano",
    "extras": ["lechuga", "tomate", "cebolla", "salsa especial"],
    "infoHamburguesa": function() {
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(" ^ ") );
    }
}

// Con 'this', nuestra hamburguesa siempre sabe cómo hablar de sí misma
hamburguesaEspecial.infoHamburguesa(); // Ojo que infoHamburguesa es llamada como a una función

//9 
function pizzaoven ( masa, salsa, queso, toppings){
    var pizza = {};
    pizza.masa = masa;
    pizza.salsa = salsa;
    pizza.queso= queso;
    pizza.toppings= toppings;
    return pizza;
}
//var s1 =pizzaoven ( "clasica", "tomate", "mozzarela", "champiñones");


var s2= pizzaoven ( "estilo Chicago" ,"tradicional", "mozzarella",  ["pepperoni", "salchicha"])

console.log(s2)

//10


function Missa (Nombre){
    console.log ("Soy missasinfonia!, tu eres", Nombre, "no?" );
}

Missa("agustin");

//11
function encontrarMaximo(a,b){
    if(a>b){
        return a;
    } else{
        return b;
    }
}

var numero1 = 10;

var numero2 = 5;
var maximo =encontrarMaximo (numero1,numero2)
console.log("el maximo entre", numero1, "y", numero2, "es:", maximo);