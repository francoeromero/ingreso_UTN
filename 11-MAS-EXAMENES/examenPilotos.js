
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
                NACIONAL
        IMPAR
        PAR

        
        */

        function comenzar()
        {

        let i;
        let mensaje;
        let nombrePiloto;
        let edadPiloto;
        let nacionalidadPiloto;
        let cantidadCarrerasGanadas;
        let numeroVehiculo;
        let flag=0;
        let nacionalidadPilotoMasJoven;
        let nombrePilotoMenosVictoriaNumeroImpar;
        let maximaEdad;
        let minimaEdad;
        let carrerasMenosGanadas;
        let nombrePilotoMenosVictoriasNumImpar;
        let contadorPilotosVehiculoImpar=0;
        let carrerasMasGanadas;
        let nombrePilotoMasJovenConMasVictorias;
        let nacionalidadPilotoVeteranoMenosVictorias;
        let acumuladorEdadPar=0;
        let promedioEdadVehiculosPar;
        let contadorVehiculosPar=0;
        for (i = 0; i < 10; i++) {

        do
        {
            nombrePiloto = prompt("Ingrese nombrePiloto").toLowerCase();
        }while(!isNaN(nombrePiloto));
        do
        {
            edadPiloto = prompt("Ingrese edadPiloto");
            edadPiloto = parseInt(edadPiloto);
        }while(isNaN(edadPiloto) || edadPiloto < 17 || edadPiloto >90);
        do
        {
            nacionalidadPiloto = prompt("Ingrese nacionalidadPiloto").toLowerCase();
        }while(nacionalidadPiloto != "argentino" && nacionalidadPiloto != "frances" && nacionalidadPiloto != "brasilero"&& nacionalidadPiloto != "estadounidense");
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
        
        if(flag==0)
        {
            nacionalidadPilotoMasJoven=nacionalidadPiloto;//A
            minimaEdad = edadPiloto;
            maximaEdad = edadPiloto;
            carrerasMenosGanadas = cantidadCarrerasGanadas;
            carrerasMasGanadas = cantidadCarrerasGanadas;
            nombrePilotoMenosVictoriaNumeroImpar=nombrePiloto;//C
            flag=1;
        }
        else
        {
            //A
            if(edadPiloto < minimaEdad)
            {
                nacionalidadPilotoMasJoven = nacionalidadPiloto;
                //E
                if(cantidadCarrerasGanadas > carrerasMasGanadas)
                {
                    nombrePilotoMasJovenConMasVictorias=nombrePiloto;
                }
            }
            //C
            if(cantidadCarrerasGanadas < carrerasMenosGanadas && !(numeroVehiculo%2==0))
            {
                nombrePilotoMenosVictoriasNumImpar=nombrePiloto;
            }
            //D
            if(edadPiloto > 25 && !(numeroVehiculo%2==0))
            {
                contadorPilotosVehiculoImpar++;
            }
            else
            {
                //F
                if(edadPiloto > maximaEdad && cantidadCarrerasGanadas < carrerasMenosGanadas)
                {
                    nacionalidadPilotoVeteranoMenosVictorias=nacionalidadPiloto;
                }
            }
        }
        //B
        if(numeroVehiculo%2==0)
        {
         
            contadorVehiculosPar++;
            acumuladorEdadPar+=edadPiloto;
        }

        }
        //****************fin iteracion************************ */
        //G
        if(acumuladorEdadPar!=0)
        {
            promedioEdadVehiculosPar = acumuladorEdadPar / i;
        }
        else
        {
            promedioEdadVehiculosPar= 0;
        }
            //muestro
            mensaje = "\n A) Nacionalidad del piloto más joven " + nacionalidadPilotoMasJoven;
            mensaje += "\n B) Cantidad de vehículos con número par. " + contadorVehiculosPar;
            mensaje += "\n  C) Nombre del piloto con menos victorias y el número de auto impar." + nombrePilotoMenosVictoriaNumeroImpar;
            mensaje += "\n D) Cantidad de pilotos mayores de 25 años con número de vehículo impar" + contadorPilotosVehiculoImpar;
            mensaje += "\n E) Nombre del piloto más joven con más victorias. " + nombrePilotoMasJovenConMasVictorias;
            mensaje += "\n F) Nacionalidad del piloto más veterano con menos victorias. " + nacionalidadPilotoVeteranoMenosVictorias;
            mensaje += "\n G) Promedio de edad de los pilotos que tiene un vehículo con número par. " + promedioEdadVehiculosPar;
        
            alert(mensaje);
        

        }
































