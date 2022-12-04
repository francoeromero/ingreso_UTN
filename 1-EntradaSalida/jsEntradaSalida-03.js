/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert(nombreIngresado);

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




let nombre;

nombre = document.getElementById


*/
