/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let resultado;

    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = preciouno + preciodos + preciotres;

    alert("La suma es de " + resultado);

    document.getElementById("txtIdPrecioTres").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioUno").value = "";
    
}
function Promedio () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let promedio;

    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

    promedio = (preciouno + preciodos + preciotres) / 3;

    alert ("EL promedio es de " + promedio);

    document.getElementById("txtIdPrecioTres").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioUno").value = "";

}
function PrecioFinal () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let preciofinal;

    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

    preciofinal = (preciouno + preciodos + preciotres) * 0.21;

    alert("el precio final es " + preciofinal);

    document.getElementById("txtIdPrecioTres").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioUno").value = "";


}