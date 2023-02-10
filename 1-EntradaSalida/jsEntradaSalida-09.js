/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	//pido espacio de memoria declarando variables
	let sueldo;
	let sueldoIngresado;
	let aumento;
	const PORCENTAJE = 0.1;
	let nuevoSueldo;
	//asigno el id a la variable
	sueldoIngresado = document.getElementById("txtIdSueldo").value;
	//como se trata de dinero, voy a convertirlo en numeros decimales
	sueldo = parseFloat(sueldoIngresado);
	//saco el 10% del sueldo y lo almaceno en la variable 'aumento'
	aumento =  sueldo*PORCENTAJE; 
	//hago la operacion y lo asigno a la variable 'nuevoSueldo'
	nuevoSueldo = sueldo+aumento;
	//ahora muestro el resultado en la segunda entrada 
	document.getElementById("txtIdResultado").value = nuevoSueldo;
}































//document.getElementById("txtIdResultado").value = nuevoSueldo;
	// nuevoSueldo = document.getElementById("txtIdResultado").value;  
	// document.getElementById("txtIdResultado").value = nuevoSueldo;

//CORRECCION: ACORDATE QUE SE LEE DE DERECHA A IZQUIERDA
//otra forma de sacar porcentaje es sueldo * 0.1 que seria el 10% 10 * sueldo / 100
/*
APUNTES:

esta bueno agregar todas las variables que necesitas o demas no importa 

let sueldo;
let nuevosueldo;
let aumento;
//para calcular el nuevo sueldo deberia sumarle al original el aumento
//para calcular un porcentaje el calculo de porcentaje lo consigo multiplicando el valor del porcentaje y lo divido por 100 

IMPORTANTE prestar atencion a que tipo de valores van a arrogar en una variable, un sueldo el valor sera en decimales por ejemplo 70.400 
ahora no usemos parseint, el valor de sueldo son flotantes porque trabaja con decimales

sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

ahora que ya pasamos el sueldo en decimales osea en un flotante tenemos que hacer el calculo
sacamos el valor del 10%

aumento = sueldo * 0.1;

y ahora le sumamos al nuevo sueldo aumentado

nuevosueldo = aumento + sueldo;



*/