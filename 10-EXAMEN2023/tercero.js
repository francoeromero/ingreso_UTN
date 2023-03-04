/*
Desarrollar y probar el código en Entrada y salida Ej 1:

3- COPA PISTÓN:

Se deberá generar un programa para registrar las estadísticas de los 10 integrantes de una carrera de autos.
Se pedirá el ingreso de:

-Nombre
-Edad (mayor a 18)
-Nacionalidad del piloto (argentino, ingles, frances, brasilero, estadounidense)
-Cantidad de carreras ganadas (no pueden ser números negativos)
-Número del vehículo (no puede ser un número negativo)

Se necesita saber :

A) Nacionalidad del piloto más joven.
B) Cantidad de vehículos con número par.
C) Nombre del piloto con menos victorias y el número de auto impar.
D) Cantidad de pilotos mayores de 25 años con número de vehículo impar.
E) Nombre del piloto más joven con más victorias.
F) Nacionalidad del piloto más veterano con menos victorias.
G) Promedio de edad de los pilotos que tiene un vehículo con número par.

*/




function comenzar()
{
    let i;
    let nombrePiloto;
    let edadPiloto;
    let nacionalidad;
    let banderaEdad = 0;
    let minEdad;
    let nacionalidadMinEdad;
    let carrerasGanadas;
    let numVehiculo;
    let flagMenosVictorias = 0;
    let menosVictorias;
    let nombreMenosVictorias;
    let contadorVehiculosPar=0;
    let contadorMayoresImpar=0;
    let flagMasVictorias = 0;
    let masVictorias;
    let nombrePilotoMasVictorias;
    let acumuladorEdad=0;
    let promedioEdad;
    


    for (i = 0; i < 10; i++) 
    {
        do
        {
            nombrePiloto = prompt("Ingrese nombrePiloto").toLowerCase();
        }while(!isNaN(nombrePiloto));

        do
        {
            edadPiloto = prompt("Ingrese edadPiloto");
            edadPiloto = parseInt(edadPiloto);
        }while(isNaN(edadPiloto) || edadPiloto < 17);

        do
        {
            nacionalidad = prompt("Ingrese nacionalidad").toLowerCase();
        }while(nacionalidad != "argentino" && nacionalidad != "brasilero" && nacionalidad != "estadounidense");

    
        do
        {
            carrerasGanadas = prompt("Ingrese cantidad carrerasGanadas");
            carrerasGanadas = parseInt(carrerasGanadas);
        }while(isNaN(carrerasGanadas) || carrerasGanadas < 0);

        do
        {
            numVehiculo = prompt("Ingrese numVehiculo");
            numVehiculo = parseInt(numVehiculo);
        }while(isNaN(numVehiculo) || numVehiculo < 0);

        // A) Nacionalidad del piloto más joven.
        
        if(banderaEdad == 0 || edadPiloto < minEdad)
        {
            minEdad = edadPiloto;
            nacionalidadMinEdad = nacionalidad;
            banderaEdad = 1;
        }
        // B) Cantidad de vehículos con número par.
        if(numVehiculo % 2 ==0)
        {
            contadorVehiculosPar++;
            //G
            acumuladorEdad += edadPiloto;
        }
        //C) Nombre del piloto con menos victorias y el número de auto impar.
        if(flagMenosVictorias == 0 || carrerasGanadas < menosVictorias)
        {
            menosVictorias = carrerasGanadas;
            nombreMenosVictorias = nombrePiloto;
            flagMenosVictorias = 1;
        }
        // D) Cantidad de pilotos mayores de 25 años con número de vehículo impar.
        if(edadPiloto > 25)
        {
            if(!(numVehiculo%2==0))
            {
                contadorMayoresImpar++;
            }
        }
        //E) Nombre del piloto más joven con más victorias.
        if(flagMasVictorias == 0 || carrerasGanadas > masVictorias)
        {
            masVictorias = carrerasGanadas;
            nombrePilotoMasVictorias = nombrePiloto;
            flagMasVictorias = 1;
        }
        // F) Nacionalidad del piloto más veterano con menos victorias.
        // G) Promedio de edad de los pilotos que tiene un vehículo con número par.

	}
	//**************************************** */
    //G
    promedioEdad= acumuladorEdad / i;
	//muestro
	mensaje = "\n A) Nacionalidad del piloto más joven." + nacionalidadMinEdad;
	mensaje += "\n cantidad vehiculos par" + contadorVehiculosPar;
	mensaje += "\n cantidad de pilotos de 25 años num vehiculo impar es: " + contadorMayoresImpar;
	mensaje += "\n nombre del piloto con mas victorias" + nombrePilotoMasVictorias;
	mensaje += "\n promedio edad  " + promedioEdad;
	
	alert(mensaje);


}