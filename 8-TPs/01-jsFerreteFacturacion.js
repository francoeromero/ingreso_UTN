/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    // //pido espacio de memoria creando variables
	// let preciouno;
    // let preciodos;
    // let preciotres;
    // let resultado;
    // //ahora cambio las entradas a tipo number y dentro tengo que mencionar que el VALOR se cambio de string a number 
    // preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
    // preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
    // preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);
    // //ahora hago la operacion de la sumatoria y asignarlo a otra variable
    // resultado = preciouno + preciodos + preciotres;
    // //luego mostrarlo en pantalla usando el alert
    // alert("La suma es de " + resultado);
    // //luego limpiamos las entradas para una nueva operacion
    // document.getElementById("txtIdPrecioTres").value = "";
    // document.getElementById("txtIdPrecioDos").value = "";
    // document.getElementById("txtIdPrecioUno").value = "";

    let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;
    alert("la suma es de " + suma);
    
}
function Promedio () 
{
    // //pido espacio de memoria
    // let preciouno;
    // let preciodos;
    // let preciotres;
    // let promedio;
    // //ahora cambio las entradas de tipo texto a number
    // preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
    // preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
    // preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);
    // //hago la operacion para sacar el promedio
    // promedio = (preciouno + preciodos + preciotres) / 3;
    // //muestro el resultado en la alerta
    // alert ("EL promedio es de " + promedio);
    // //ahora limpiamos las entradas para nueva operacion
    // document.getElementById("txtIdPrecioTres").value = "";
    // document.getElementById("txtIdPrecioDos").value = "";
    // document.getElementById("txtIdPrecioUno").value = "";
    
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;
    promedio = suma / 3;
    promedio = promedio.toFixed(2); // .toFixed(2) = redondeamos 2 decimales 
    alert("El promedio es de " + promedio);


}
function PrecioFinal () 
{
    // //pido espacio de memoria 

	let preciouno;
    let preciodos;
    let preciotres;
    let preciofinal;

    // //cambio las entradas a tipo number y le asigno a cada variable

    preciouno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    preciodos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    preciotres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    // //hacemos la operacion 

    preciofinal = (preciouno + preciodos + preciotres) * 0.21;  //CORRECCION : Aca sacaste solo el 21% del precio, tendria que llamarse IVA solamenteo NO preciofinal porque el precio final seria el precio del producto + iva (lo que acabas de sacar) 

    //iva = (preciouno + preciodos + preciotres) *0.21;
    //preciofinal = (preciouno + preciodos + preciotres) + iva; // o la otra reemplazarlo por suma + iva 

    // //muestro el resultado en la alerta

    alert("el precio final es " + preciofinal.toFixed(2)); //para redondear con 2 decimales o tambien se agrega antes preciofinal = preciofinal.toFixed(2);

    // //limpio las entradas para una nueva operacion

    document.getElementById("txtIdPrecioTres").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
     document.getElementById("txtIdPrecioUno").value = "";

    //RESUELTO POR EL PROFE:
    // let precio1;
    // let precio2;
    // let precio3;
    // let suma;
    // let iva;
    // let importeFinal;

    // precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    // precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    // precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    // suma = precio1 + precio2 + precio3;
    // iva = suma * .21;
    // importeFinal = suma + iva; 

    // alert("El importe es de " + importeFinal);

}

/*
APUNTES: 

De la funcion suma tenia que ser Parsefloat para sacar los valores flotantes 

funcion promedio

suma = precio1 + precio2 + precio3;

alert("El promedio es $" + suma / 3)

*/