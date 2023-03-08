/*


Una empresa de hotelería necesita una aplicación capaz de administrar los datos 
de quienes reserven.
La empresa tiene hoteles en: Moscu, Barcelona y Buenos Aires, el precio por 
noche por persona es de $6000.
Se registra de cada reserva:
Cantidad de personas (validar mínimo 1, máximo 6),
lugar de destino (Moscu, Barcelona y Buenos Aires),  
Cantidad de noches (mínimo 3).

En caso de que la cantidad de personas sea mayor a 3 y la cantidad de noches mayor a 7, 
se aplicará
un descuento del 15% sobre el total de la estadía.

Informar:
a) La recaudación bruta (Todas las reservas sin descuentos)
b) La recaudación con descuentos aplicados.

*/


function comenzar()
{
    let continua;
	let mensaje;
    let cantidadPersonas;
    let lugarDestino;
    let cantidadNoches;
	let descuento;
    let precioNoche=6000;
    let importeTotalBruto;
    let importeTotalConDescuento;
    let acumuladorRecaudacionConDescuento=0;
    let acumuladorRecaudacionBruta=0;
	do
	{
        do
        {
            cantidadPersonas = prompt("Ingrese cantidadPersonas");
            cantidadPersonas = parseInt(cantidadPersonas);
        }while(cantidadPersonas < 0 );	
        do
        {
            lugarDestino = prompt("Ingrese lugarDestino  (Moscu, Barcelona y Buenos Aires)");
            lugarDestino = lugarDestino.toLowerCase();
        }while(lugarDestino != "buenos aires" && lugarDestino != "barcelona" && lugarDestino != "moscu");
        do
        {
            cantidadNoches = prompt("Ingrese cantidadNoches");
            cantidadNoches = parseInt(cantidadNoches);
        }while(isNaN(cantidadNoches) || cantidadNoches > 3);

        if(cantidadPersonas>7)
        {
            descuento = 0.85;
        }
        else
        {
            descuento = 1;
        }
        importeTotalBruto = cantidadNoches*precioNoche;
        importeTotalConDescuento = cantidadNoches*precioNoche*descuento;
        //a
        acumuladorRecaudacionBruta+=importeTotalBruto;
        //b
        acumuladorRecaudacionConDescuento+=importeTotalConDescuento; 
        
		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */

	//muestro
	mensaje = "\n A recaudacion bruta todas sin descuento" + acumuladorRecaudacionBruta;
	mensaje += "\n B recaudacion con descuento" + acumuladorRecaudacionConDescuento;
	
	alert(mensaje);
	
}