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
    ancho = parseFloat(document.getElementById("txtIdLargo").value);
    largo = parseFloat(document.getElementById("txtIdAncho").value);

    //opero que es lo que necesito? saber el largo de todo el cable que rodea el terreno entonces el perimetro y luego lo multiplico por 3 porque va a rodear 3 veces el terreno
    perimetro = 2 * ancho + 2 * largo;
    alambre = 3 * perimetro; 

    //mostramos en la pantalla 
    alert("la cantidad de alambre es de " + alambre);

}
function Circulo () 
{
	
    let radio;
    let perimetro;
    let alambre;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 3.14 * radio^2;
    alambre = 3 * perimetro;

    alert("la cantidad de alambre de un circulo es de " + alambre);
}
function Materiales () 
{
	
}