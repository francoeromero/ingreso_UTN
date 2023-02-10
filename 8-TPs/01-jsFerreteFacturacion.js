/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

*/
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


    // .toFixed(2) = redondeamos 2 decimales 

function Sumar () 
{
    //declaro las variables 
    let precioUnoIngresado;
    let precioDosIngresado;
    let precioTresIngresado;
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    //los id de los campos de entrada los asigno alas variables
    precioUnoIngresado = document.getElementById("txtIdPrecioUno").value;
    precioDosIngresado = document.getElementById("txtIdPrecioDos").value;
    precioTresIngresado = document.getElementById("txtIdPrecioTres").value;
    //a las entradas las convierto en numeros decimales 
    precioUno = parseFloat(precioUnoIngresado);
    precioDos = parseFloat(precioDosIngresado);
    precioTres = parseFloat(precioTresIngresado);
    //hago la operación
    sumaPrecios = precioUno + precioDos + precioTres;
    //muestro el resultado en una alerta cocatenando con un string
    alert("la suma es de " + sumaPrecios);
    //limpio las entradas para usarse de nuevo
    document.getElementById("txtIdPrecioUno").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioTres").value = "";
}
function Promedio () 
{  
    //declaro las variables
    let precioUnoIngresado;
    let precioDosIngresado;
    let precioTresIngresado;
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let promedio;
     //los id de los campos de entrada los asigno alas variables
     precioUnoIngresado = document.getElementById("txtIdPrecioUno").value;
     precioDosIngresado = document.getElementById("txtIdPrecioDos").value;
     precioTresIngresado = document.getElementById("txtIdPrecioTres").value;
     //a las entradas las convierto en numeros decimales 
     precioUno = parseFloat(precioUnoIngresado);
     precioDos = parseFloat(precioDosIngresado);
     precioTres = parseFloat(precioTresIngresado);
    //hago la operacion
    sumaPrecios = precioUno + precioDos + precioTres;
    promedio = sumaPrecios / 3;
    promedio = promedio.toFixed(2);//redondeo en 2 decimales 
    //muestro el resultado en una alerta concatenando con un string
    alert("El promedio es de " + promedio);
    //por ultimo limpio las entradas para usarse de nuevo
    document.getElementById("txtIdPrecioUno").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioTres").value = "";
}
function PrecioFinal () 
{
    //pido espacio de memoria declarando variables
    let precioUnoIngresado;
    let precioDosIngresado;
    let precioTresIngresado;
	let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    const IVA = 0.21;
    let impuesto;
    let precioFinal;
     //los id de los campos de entrada los asigno alas variables
     precioUnoIngresado = document.getElementById("txtIdPrecioUno").value;
     precioDosIngresado = document.getElementById("txtIdPrecioDos").value;
     precioTresIngresado = document.getElementById("txtIdPrecioTres").value;
     //a las entradas las convierto en numeros decimales 
     precioUno = parseFloat(precioUnoIngresado);
     precioDos = parseFloat(precioDosIngresado);
     precioTres = parseFloat(precioTresIngresado);
    //hago la operacion 
    sumaPrecios = precioUno + precioDos + precioTres;
    impuesto = sumaPrecios * IVA;
    precioFinal = sumaPrecios + impuesto;
    //muestro el resultado en una alerta concatenando con un string y redondeo a 2 decimales
    alert(`El precio final es ${precioFinal.toFixed(2)}`)
    // //limpio las entradas para una nueva operacion
    document.getElementById("txtIdPrecioTres").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioUno").value = "";
}


//RESUELTO POR EL PROFE:
    // let precioUno;
    // let precioDos;
    // let precioTres;
    // let suma;
    // let iva;
    // let importeFinal;

    // precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    // precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    // precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    // suma = precioUno + precioDos + precioTres;
    // iva = suma * .21;
    // importeFinal = suma + iva; 

    // alert("El importe es de " + importeFinal);




/*
APUNTES: 

De la funcion suma tenia que ser Parsefloat para sacar los valores flotantes 

funcion promedio

suma = precioUno + precioDos + precioTres;

alert("El promedio es $" + suma / 3)

*/