//Ejercicio 1
const ConversorTemperatura = temp => (temp * 9/5) +32;
console.log(ConversorTemperatura(50))

 //ejercicio 2
const generadorMensajes = (nombre,edad) =>`Hola ${nombre}, tienes ${edad} años de edad.`;
console.log (generadorMensajes("Juan",30))

 //ejercicio 3
const kilAMillas = millas => `${millas *1.60934}km`;
console.log (kilAMillas(10))

//ejercicio 4
const climaDia = clima => clima =="lluvioso" ? "Llevar paraguas": clima == "soleado" ? "Lleva sombrero": "lleva algo yqs";
console.log (climaDia("briza"))