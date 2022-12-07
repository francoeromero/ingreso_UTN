/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	// let sueldo;
	// let resultado;

	// sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	// resultado = 10 * sueldo / 100;
	
	// resultado = document.getElementById("txtIdResultado").value;
	// alert("El resultado es " + resultado);

	let sueldo;
	let resultado;
	//paso el valor a la variable sueldo y cambio de string a number
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	//hago la operacion y lo meto en la variable aumento
	resultado =  10 * sueldo / 100; //otra forma de sacar porcentaje es sueldo * 0.1 que seria el 10%
	

	resultado = parseFloat(document.getElementById("txtIdResultado").value);
	
}

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


*/