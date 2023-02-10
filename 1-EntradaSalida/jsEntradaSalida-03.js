/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaro una variable
	let nombreIngresado;

	// asigno el valor que ingrese el usuario de la entrada a la variable nombreIngresado
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//muestro el dato concatenando con un string
	alert("Bienvenido "+nombreIngresado);
	//limpio la entrada para que usarse nuevamente
	document.getElementById("txtIdNombre").value = "";

}

/*
APUNTES:
renombramos el id de un elemento de html y terminamos con .value

el id de un elemento input 

Codigo ASCII : Una forma de escribir letras en binario

Codigo de standard americano para intercambio de informacion

y lo que hace es asociar un numero a un caracter

string "1" number 1 (no confundir)

Si yo quiero capturar la informacion que el usuario coloca en un input de html, tengo que ir al JS y hacer esto:

1- Creamos una variable (estamos pidiendo un espacio de memoria)
2- asignamos el valor que se coloque llamando al id del input y poniendo ".value"
3- Ese valor tiene que meterse en el espacio de memoria que creamos que seria la variable entonces ponemos variable = infoinput.value; 

Profe:

Como hago para asignar una variable algo que esta escrito en otro archivo?

cuando ponemos "document." te va a aparecer muchas elecciones que podemos hacer con el documento de html vinculado con js 

"document.getElementById" : Tomar un elemento por su identificador. Con esto toma el id de un elemento html por ejemplo el input y agarra el valor de lo que el usuario coloque 

1- Creamo una variable (espacio de memoria)
2- asignamos ala variable un valor
3- llamamos al nombre del id del elemento html document.getElementById("nombredelID")
4- Cuando agregamos un punto podemos crear mas cosas, me va a aparecer diferentes elecciones que puedo hacer con el input.
Pero que es lo que necesito? es el valor que van a escribir adentro del input entonces agrego
.value
quedaria asi:

document.getElementById("nombredelID").value;

5- Ahora llamamos ala variable con un alert para mostrar el valor 

function(mostrar) {
	let nombre;
	nombre = document.getElementById("nombreID").value;
	alert(nombre);
}

Otra alternativa:

let nombre;
nombre = nombreID.value;
aler(nombre);

Otra casa:

si agregamos: document.getElementById("txtIdNombre").value = "";

asignamos una cadena vacia para que se borre lo que esta escrito para volverse a usar

*/
