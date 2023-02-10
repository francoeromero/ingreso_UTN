/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/*
bien, solo que hay que pensar mejor en la operacion y utilizar los parentesis
pregunta: parseInt y parsefloat que colocar para cada uno? */

function Rectangulo () 
{
    //pido espacio de memoria declarando variables
    let anchoIngresado;
    let largoIngresado;
    let ancho;
    let largo;
    let perimetro;
    let alambre;
    let cantHilos = 3;
    //asigno los id a las variables
    anchoIngresado = document.getElementById("txtIdAncho").value;
    largoIngresado = document.getElementById("txtIdLargo").value;
    //paso los valores a flotantes porque van a ser numeros decimales
    ancho = parseFloat(anchoIngresado);
    largo = parseFloat(largoIngresado);
    //hago la operación
    perimetro = (ancho + largo)*2; 
    alambre = cantHilos * perimetro; 
    //mostramos en una alert 
    alert(`La cantidad de alambre es de ${alambre} metros lineales`);
    //limpio las entradas para usarse de nuevo
    document.getElementById("txtIdAncho").value = "";
    document.getElementById("txtIdLargo").value = "";
}

function Circulo () 
{ 
	//pido espacio de memoria declarando variables
    let radioIngresado;
    let radio;
    let perimetro;
    let alambre;
    let cantHilos = 3;
    const PI = 3.14;
    //asigno los valores del campo de entrada a la variable
    radioIngresado = document.getElementById("txtIdRadio").value;
    //la entrada la paso a numeros decimales 
    radio = parseFloat(radioIngresado);
    //hago la operacion
    perimetro = 2 * PI * radio;
    alambre = cantHilos * perimetro;
    //muestro el resultado en una alerta 
    alert(`La cantidad de alambre de un circulo es de ${alambre} metros lineales`); 
    //limpio la entrada para nueva operación
    document.getElementById("txtIdRadio").value = "";
}

/*
otra forma de representar un valor que nunca va a cambiar como el PI
const PI = 3.14  
LAS VARIABLES CONSTANTES SE AGREGAN EL VALOR EN LA MISMA LINEA 

Math.variableconstante = para saber el valor exacto 


  //hago el calculo, primero el area de m2 del terreno, luego asigno a cemento y cal, lo multiplico por la cant de bolsas por m2 para saber cuantas bolsas necesita


*/
function Materiales () 
{
	//pido espacio de memoria declarando variables
    let anchoIngresado;
    let largoIngresado;
    let ancho;
    let largo;
    let metroCuadrado;
    let bolsasCemento;
    let bolsasCal; 
    const CEMENTO = 2;
    const CAL = 3;
    //selecciono los id de las entradas y las paso a las variables
    anchoIngresado = document.getElementById("txtIdLargo").value;
    largoIngresado = document.getElementById("txtIdAncho").value;
    //cambio las entradas de string a number y asigno a las variables
    ancho = parseFloat(anchoIngresado);
    largo = parseFloat(largoIngresado);
    //hago el calculo
    metroCuadrado = ancho * largo;
    bolsasCemento = metroCuadrado * CEMENTO; 
    bolsasCal = metroCuadrado * CAL; 
    //Muestro el resultado en alerta concatenando con strings
    alert(`Voy a necesitar ${bolsasCemento} bolsas de cemento.\n Y voy a necesitar ${bolsasCal} bolsas de cal.`);
    //limpio las entradas para una nueva operación
    document.getElementById("txtIdLargo").value = "";
    document.getElementById("txtIdAncho").value = "";
}


    //alert('Para un contrapiso de ${metrocuadrado} m2 necesito comprar ${bolsascemento} bolsas de cemento y ${bolsascal} bolsas de cal');

    /*
    Otra cosa importante:
    Si ya sabemos que la cantidad de cemento y de cal, son valores que nunca van a cambiar, entonces hay que darle una variable CONSTANTE, es sumamente importante, todo lo que sea un valor que nunca cambiara mejor asignarle en una variable constante 

    const CEMENTO_X_METRO = 2;
    const CAL_X_METRO = 3; 

    Y SIEMPRE EN MAYUSCULA Y SEPARAR CON _ 
    */

    
