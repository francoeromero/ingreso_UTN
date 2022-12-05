/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// let uno = txtIdNumeroUno.value;
	// let dos = txtIdNumeroDos.value;
	// alert(uno + dos);

	//pido espacio de memoria
	let num1;
	let num2;
	let resultado;

	//paso de string a number el valor de la entrada de las dos cadenas
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//hago la operacion sumando los dos valores numericos
	resultado = num1 + num2;

	//muestro el resultado en pantalla
	alert("El resultado es " + resultado);

	//limpio las entradas para una nueva operacion		
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";


}

/*
APUNTES:

se suman

	let x = 30;
	let y = 20;
	let z;

	z = x + y;

	alert(z);

no se suman

	let x = "30";
	let y = 20;
	let z;

	z = x + y;

	alert(z);

	string + string = string 
	string + number = string
	number + string = string
	number + number = number
	ç


	que pasa si pongo esto? ojo poner en orden cada linea tiene un orden secuencial 

	let num1;
	let num2;
	let resultado;
	
	num1 = document.getElemenbyId("txtNumeroUno").value;
	num2 = document.getElemenbyId("txtNumeroDos").value;

	resultado = num1 + num2;

	alert("la suma es " resultado);

	Siempre acordarse que el algoritmo es una receta de cocina, y hay que dar esas instrucciones en cada linea y en orden

	En programacion hay dos tipos de errores: 
	
	errores de sintaxis
	olvidarte algun signo del lenguaje

	errores de logica 
	el programa esta perfectamente escrito, pero el programador no supo secuenciar de manera correcta para resolver un problema

NaN:  Not a number  / no es un numero

orden secuencial:

1-Pido espacio de memoria
2-Cargo las variables
3- Opero las variables
4- Muestro el resultado


Porque no me los suma y los concatena?
porque el input es de tipo texto y todo lo que escribas siempre lo va a tomar como un string "20" "30"

ParseInt : convertir algo que es de tipo no numerico en numero
convertir string en number

Parsear: convertir en dato string a numero

Castear: convertir dato numerico en otro tipo de dato numerico

en programacion se resuelve de derecha a izquierda osea:
x = num1 + num2;
primero opera y luego asigna a x

ParseInt y ParseFloat

let x = "20";
let y = "30";
let z;

convertimos de string a numer
x = parseInt(x);
y = parseInt(y);

opera y asigno a z
z = x + y;

muestro el resultado en pantalla
alert(z);

paseInt lee de caracter a caracter verificando si es un tipo de texto Number, si no es numerico te muestra solo lo que leyo que era un numero ej:
12juan ---> 12 

Si quisiera pasar numeros con signos osea numeros especificos por ejemplo 3.14, parseInt solo te mostrara el 3 para que te muestre todo el numero usamos parseFloat()


entonces agregamos el parseInt() a los input para que te devuelva el resultado de una operacion numerica

	let num1;
	let num2;
	let resultado;
	
	num1 = document.getElemenbyId("txtNumeroUno").value;

	parseInt(num1);

	num2 = document.getElemenbyId("txtNumeroDos").value;

	parseInt(num2);

	resultado = num1 + num2;

	alert("la suma es " resultado);



*/