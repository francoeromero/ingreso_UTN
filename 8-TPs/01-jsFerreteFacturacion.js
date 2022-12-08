/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //pido espacio de memoria creando variables
	let preciouno;
    let preciodos;
    let preciotres;
    let resultado;
    //ahora cambio las entradas a tipo number y dentro tengo que mencionar que el VALOR se cambio de string a number 
    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);
    //ahora hago la operacion de la sumatoria y asignarlo a otra variable
    resultado = preciouno + preciodos + preciotres;
    //luego mostrarlo en pantalla usando el alert
    alert("La suma es de " + resultado);
    //luego limpiamos las entradas para una nueva operacion
    document.getElementById("txtIdPrecioTres").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioUno").value = "";
    
}
function Promedio () 
{
    //pido espacio de memoria
    let preciouno;
    let preciodos;
    let preciotres;
    let promedio;
    //ahora cambio las entradas de tipo texto a number
    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);
    //hago la operacion para sacar el promedio
    promedio = (preciouno + preciodos + preciotres) / 3;
    //muestro el resultado en la alerta
    alert ("EL promedio es de " + promedio);
    //ahora limpiamos las entradas para nueva operacion
    document.getElementById("txtIdPrecioTres").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioUno").value = "";

}
function PrecioFinal () 
{
    //pido espacio de memoria 
	let preciouno;
    let preciodos;
    let preciotres;
    let preciofinal;
    //cambio las entradas a tipo number y le asigno a cada variable
    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);
    //hacemos la operacion 
    preciofinal = (preciouno + preciodos + preciotres) * 0.21;
    //muestro el resultado en la alerta
    alert("el precio final es " + preciofinal);
    //limpio las entradas para una nueva operacion
    document.getElementById("txtIdPrecioTres").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioUno").value = "";


}