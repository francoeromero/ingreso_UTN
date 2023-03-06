
  /*
        Desarrollar y probar el código en Entrada y salida Ej 1
        3- COPA PISTÓN:

        Se deberá generar un programa para registrar las estadísticas de los 10 integrantes de una carrera de autos.
        Se pedirá el ingreso de:

        -Nombre
        -Edad (mayor a 18)
        -Nacionalidad del piloto (argentino, ingles, frances, brasilero, estadounidense)
        -Cantidad de carreras ganadas (no pueden ser números negativos)
        -Número del vehículo (no puede ser un número negativo)

        Se necesita saber :

        A) Nacionalidad del piloto más joven. * flag1 - edad
        B) Cantidad de vehículos con número par. * if1-contador
        C) Nombre del piloto con menos victorias y el número de auto impar. * if2-flag2
        D) Cantidad de pilotos mayores de 25 años con número de vehículo impar. *if2-
        E) Nombre del piloto más joven con más victorias. * if-flag1
        F) Nacionalidad del piloto más veterano con menos victorias. * flag1
        G) Promedio de edad de los pilotos que tiene un vehículo con número par. *if2

        
        */
       
       function comenzar()
       {
           let i;
           let mensaje;
           let nombrePiloto;
           let nacionalidadPiloto;
           let edadPiloto;
           let cantidadCarrerasGanadas;
           let numeroVehiculo;
           let flagJovenViejo = 0;
           let menosEdad;
           let mayorEdad;
           let nacionalidadPilotoMasJoven;
           let cantidadCarreraMasGanada;
           let nombrePilotoMasJovenMayorCantidadCarrerasGanadas;
           let nacionalidadPilotoViejoMenosCarrerasGanadas;
           let cantidadCarreraMenosGanada;
           let contadorVehiculosPar=0;
           let contadorVehiculosImpar=0;
           let nombrePilotoJovenImpar;
           let acumuladorEdadPar=0;
           let promedioEdadPar;
           

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
            nacionalidadPiloto = prompt("Ingrese nacionalidadPiloto (argentino, ingles, frances, brasilero, estadounidense)").toLowerCase();
        }while(nacionalidadPiloto != "argentino" && nacionalidadPiloto != "ingles" && nacionalidadPiloto != "estadounidense"&& nacionalidadPiloto != "frances" && nacionalidadPiloto != "brasilero");

        do
        {
            cantidadCarrerasGanadas = prompt("Ingrese cantidadCarrerasGanadas");
            cantidadCarrerasGanadas = parseInt(cantidadCarrerasGanadas);
        }while(isNaN(cantidadCarrerasGanadas) || cantidadCarrerasGanadas < 0);

        do
        {
            numeroVehiculo = prompt("Ingrese numeroVehiculo");
            numeroVehiculo = parseInt(numeroVehiculo);
        }while(isNaN(numeroVehiculo) || numeroVehiculo < 0);

        // A) Nacionalidad del piloto más joven. * flag1 - edad
        // E) Nombre del piloto más joven con más victorias. * if-flag1
        // F) Nacionalidad del piloto más veterano con menos victorias. * flag1


        if(flagJovenViejo == 0)
        {
            menosEdad = edadPiloto;
            mayorEdad = edadPiloto;
            cantidadCarreraMasGanada= cantidadCarrerasGanadas
            nacionalidadPilotoMasJoven = nacionalidadPiloto;//A
            nombrePilotoMasJovenMayorCantidadCarrerasGanadas = nombrePiloto;//E
            nacionalidadPilotoViejoMenosCarrerasGanadas = nacionalidadPiloto;//F
            nombrePilotoJovenImpar = nombrePiloto; //C
            flagJovenViejo = 1;
        }
        else
        {
            if(edadPiloto < menosEdad)
            {
                //A 
                nacionalidadPilotoMasJoven = nacionalidadPiloto;
                //B
                if(cantidadCarrerasGanadas > cantidadCarreraMasGanada)
                {
                    nombrePilotoMasJovenMayorCantidadCarrerasGanadas=nombrePiloto;
                }
                else
                {
                    //C
                    if(cantidadCarreraMasGanada < cantidadCarrerasGanadas && !(numeroVehiculo%2==0))
                    {
                        nombrePilotoJovenImpar=nombrePiloto;
                    }
                }
            }
            else
            {
                //F
                if(edadPiloto > mayorEdad)
                {
                    if(cantidadCarreraMasGanada < cantidadCarreraMenosGanada)
                    {
                        nacionalidadPilotoViejoMenosCarrerasGanadas = nacionalidadPiloto;
                    }
                }
                
            }
        }

        // B) Cantidad de vehículos con número par.
        //G) Promedio de edad de los pilotos que tiene un vehículo con número par. 
        if(numeroVehiculo%2==0)
        {
            contadorVehiculosPar++;
            acumuladorEdadPar+=edadPiloto;
        }
        
	}
	//**************************************** */
    //G
    if(contadorVehiculosPar!=0)
    {
        promedioEdadPar = acumuladorEdadPar / contadorVehiculosPar;
    }
    else
    {
        promedioEdadPar = 0;
    }
	//muestro
	mensaje = "\n A - nacionalidad del Piloto Mas Joven " + nacionalidadPilotoMasJoven;
    mensaje += "\n B- cantidad de vehiculos par es: " + contadorVehiculosPar;
	mensaje += "\n B - nombre Piloto Mas Joven Mayor Cantidad de Carreras Ganadas " + nombrePilotoMasJovenMayorCantidadCarrerasGanadas;
	mensaje += "\n C- nombre Piloto mas Joven con num vehiculo Impar " + nombrePilotoJovenImpar;
	mensaje += "\n D-" ;
	mensaje += "\n E- nombre Piloto Mas Joven Mayor Cantidad Carreras Ganadas " + nombrePilotoMasJovenMayorCantidadCarrerasGanadas;
	mensaje += "\n F- nacionalidad Piloto Viejo Menos Carreras Ganadas " + nacionalidadPilotoViejoMenosCarrerasGanadas;
    mensaje+= "\n promedio de edad pilotos con numero par: " + promedioEdadPar;
	
	alert(mensaje);

}