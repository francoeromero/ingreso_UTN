// Ejercicio 3

// UTN-Car es una empresa de alquiler de autos, nos piden que desarrollemos
//  una aplicación para su sistema de 
// alquileres, 
//dato:
// ingresando cantidad de días a alquilar(no exceda los 30dias) 
//la categoría del vehículo.(a , b , c, d, e)

// La duración máxima del alquiler es de un mes, se alquilan 5 categorías 
// distintas de vehículos (A-B-C-D-E).

// Teniendo en cuenta los precios por dia son:
// A: $100.000
// B: $50.000
// C: $20.000
// D: $10.000
// E: $7.500


function comenzar ()
{
    let continua;
	let mensaje;
    let cantidadDias;
    let categoriaIngresada;
	let precioxDia;
    let precioTotal;
	
	do
	{
    
        do
        {
            cantidadDias = prompt("Ingrese cantidadDias para alquilar");
            cantidadDias = parseInt(cantidadDias);
        }while(isNaN(cantidadDias) || cantidadDias < 0 || cantidadDias > 30);
        do
        {
            categoriaIngresada = prompt("Ingrese categoria A B C D E");
            categoriaIngresada = categoriaIngresada.toLowerCase();
        }while(categoriaIngresada != "a" && categoriaIngresada != "b" && categoriaIngresada != "c" && categoriaIngresada != "d" && categoriaIngresada != "e");   
        switch (categoriaIngresada) {
            case "a":
                precioxDia=100000;
            break;
            case "b":
                precioxDia=50000;
            break;
            case "c":
                precioxDia=20000;
            break;
            case "d":
                precioxDia=10000;
            break;
            default:
                precioxDia=7500;
            break;
        }
        precioTotal = cantidadDias*precioxDia;

		continua = confirm("Quieres continuar?");
	}while(continua);

}