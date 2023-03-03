/*

3)Copa piston!!!
Se deberá generar un programa para registrar las estadísticas de los 10 integrantes de una carrera de autos.
Se pedirá el ingreso de:
nombre
edad (mayor a 18)
nacionalidad del piloto (argentino, brasilero, estadounidense)
cantidad de carreras ganadas (no pueden ser números negativos)
número del vehículo (no puede ser un número negativo)

Necesitamos saber:
a-La nacionalidad que más pilotos tiene
b-Cantidad de pilotos mayores de 25 años con número de vehículo impar.
c-Promedio de edad de los pilotos que tiene un vehículo con número par.




*/


function comenzar()
{

	let i;
    let nombrePiloto;
    let edadPiloto;
    let nacionalidad;
    let contadorArg =0;
    let contadorPilotosPar;
    let numVehiculo;
    let contadorBrasil = 0;
    let nacionalidadMasPilotos ;
    let contadorPilotosImpar = 0;
    let contadorEEUU =0;
    let promedioPilotosPar;
    let acumuladorPilotosPar = 0;

	for (i = 0; i < 10; i++) {

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
            numVehiculo = prompt("Ingrese numVehiculo");
            numVehiculo = parseInt(numVehiculo);
        }while(isNaN(numVehiculo) || numVehiculo < 0);

        if(nacionalidad == "argentino")
        {
            contadorArg++;
        }
        else
        {
            if(nacionalidad == "brasilero")
            {
                contadorBrasil++;
            }
            else
            {
                contadorEEUU++;
            }
        }

        //b-Cantidad de pilotos mayores de 25 años con número de vehículo impar
        if(edadPiloto > 25)
        {
            if(!(numVehiculo % 2 == 0))
            {
                contadorPilotosImpar++;
            }
            else
            {
                contadorPilotosPar++;
                acumuladorPilotosPar+=edadPiloto;
            }
        }

        // numeroIngresado=numVehiculo%2;
        // if(numeroIngresado!=0)
        // {
        //     if(edadPiloto>25)
        //     {
        //         contadorImpar++;
        //     }
        // }
        // else
        // {   
        //     contadoPar++;
        // }
	

	}
	//**************************************** */

    if(contadorArg > contadorBrasil && contadorArg > contadorEEUU)
    {
        nacionalidadMasPilotos = "ARGENTINA";
    }
    else
    {
        if(contadorBrasil > contadorArg && contadorBrasil > contadorEEUU)
        {
            nacionalidadMasPilotos = "BRASIL";
        }
        else
        {
            nacionalidadMasPilotos = "ESTADOS UNIDOS";
        }
    }

    //c c-Promedio de edad de los pilotos que tiene un vehículo con número par
    if(contadorPilotosPar!=0)
    {
        promedioPilotosPar = acumuladorPilotosPar / contadorPilotosPar;

    }
    else
    {
        mensaje += "\n No se puede ingresaron pilotos par";
    }

	//muestro
	mensaje = "\n a-La nacionalidad que más pilotos tiene es " + nacionalidadMasPilotos;
	mensaje += "\n b-Cantidad de pilotos mayores de 25 años con número de vehículo impar " + contadorPilotosImpar;
	mensaje += "\n c-Promedio de edad de los pilotos que tiene un vehículo con número par" + promedioPilotosPar;
	
	alert(mensaje);





}