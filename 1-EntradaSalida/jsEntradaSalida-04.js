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


*/