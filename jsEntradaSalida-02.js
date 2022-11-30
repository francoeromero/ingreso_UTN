/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre = prompt('Cual es tu nombre?')
	alert('Bienvenido ' + nombre);
}

/*
APUNTES
Como tomo un dato y donde se guarda? 
el dato se va a guardad en la memoria ram
espacio de informacion 

Que es prompt ? 
es un metodo que se usa para mostrar una entrada para que el usuario escriba un dato

Los nombres de las variables tienen que ser coherentes 
nunca puede empezar con un numero

declarar una variable afuera de una funcion ? 
cuando se recarga una pagina se activa una variable fuera de la funcion
pero si esta dentro se tiene que activar la funcion

var let const  

ahora se utiliza let y const para las constantes que el valor nunca cambia 

ejemplo: 

let nombre; //declaro una variable para asignar un espacio de memoria dentro de esa variable 

nombre = "juan"; // asigno una cadena ala variable llamada juan

alert(nombre); // asigno una alerta que llame a la variable nombre 

se puede cambiar el let pero el const no 

let nombre = "jose";
alert(nombre);
let nombre = "fran";
alert(nombre);



*/