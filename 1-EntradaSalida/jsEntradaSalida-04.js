/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre = prompt('hola, cual es tu nombre?');
	txtIdNombre.value = nombre;

}

/*
APUNTES:

Por que no se escribe en el input ? 

porque en el html el elemento input, tiene como propiedad "readonly". Esta pensada para que solo se lea y no se modifique

vamos a reemplazar el alert por el input para mostrarse el resultado

que tenemos que hacer?
tenemos que obtener el dato de prompt y mostrarlo en el input 

lo primero hay que pedir un espacio de memoria, para que el dato que quiero se asigne a ese espacio como lo hacemos ? declarando una variable

1- let nombrevariable;

lo segundo es pedirle al nombre al usuario a traves de la funcion promnt, osea establecer un valor al prompt para que sea asignado ala variable

2- variable = prompnt("valor");

ahora que ya tenemos el valor si es que el usuario le dio aceptar, tenemos que meter esa informacion al input.
Osea que la variable con su respectivo valor va a ser a asignado al input, como llamamos al input? con el id.

3- variable = NombreIDinput.value ; 
3- document.getElementById("NombreIDinput").vallue = variable;



*/