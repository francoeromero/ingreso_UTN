/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //pido espacio de memoria
    let ancho;
    let largo;
    let perimetro;
    let alambre;

    //paso los valores a flotantes
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    largo = parseFloat(document.getElementById("txtIdLargo").value);

    //opero que es lo que necesito? saber el largo de todo el cable que rodea el terreno entonces el perimetro y luego lo multiplico por 3 porque va a rodear 3 veces el terreno
    perimetro = 2 * ancho + 2 * largo; // (ancho + largo) * 2
    alambre = 3 * perimetro; 

    //mostramos en la pantalla 
    alert("la cantidad de alambre es de " + alambre + " metros lineales");
}
/*
bien, solo que hay que pensar mejor en la operacion y utilizar los parentesis
pregunta: parseInt y parsefloat que colocar para cada uno? */
function Circulo () 
{
	
    let radio;
    let perimetro;
    let alambre;
    const PI = 3.14;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;
    alambre = 3 * perimetro;

    alert("la cantidad de alambre de un circulo es de " + alambre + " metros lineales");
}

/*
otra forma de representar un valor que nunca va a cambiar como el PI
const = PI = 3.14  
LAS VARIABLES CONSTANTES SE AGREGAN EL VALOR EN LA MISMA LINEA 

Math.variableconstante = para saber el valor exacto 

*/
function Materiales () 
{
	//pido espacio de memoria 
    let ancho;
    let largo;
    let metrocuadrado;
    let bolsascemento;
    let bolsascal;

    //cambio las entradas a number
    ancho = parseFloat(document.getElementById("txtIdLargo").value);
    largo = parseFloat(document.getElementById("txtIdAncho").value);

    //hago el calculo, primero el area de m2 del terreno, luego asigno a cemento y cal, lo multiplico por la cant de bolsas por m2 para saber cuantas bolsas necesita
    metrocuadrado = ancho * largo;
    bolsascemento = metrocuadrado * 2;
    bolsascal = metrocuadrado * 3;

    //Muestro el resultado en pantalla
    alert("Voy a necesitar " + bolsascemento + " bolsas de cemento" + " Y voy a necesitar " + bolsascal + " bolsas de cal");
    //alert('Para un contrapiso de ${metrocuadrado} m2 necesito comprar ${bolsascemento} bolsas de cemento y ${bolsascal} bolsas de cal');

    
}