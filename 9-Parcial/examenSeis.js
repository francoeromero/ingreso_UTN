//inicio : 5:01 fin: 
/*  
Se deben ingresar los datos de una carrera de motos:
- Nombre y número del competidor
- Marca de la moto (honda, yamaha, suzuki)
- Edad (mayor de 18)
- Tiempo en vuelta 1, 2, 3
- Posición en carrera

validacion:
marca de moto (honda, yamaha, suzuki)
edad (mayor de edad)


1) Informar el número del competidor más rápido en promedio
    flag
2) Cuántas motos honda llegaron entre los primeros 10
    contadorMotosHondas  > 11 
3) Promedio total por vuelta de los competidores
    suma de vueltas(marcaumulador) / cantidad de vueltas
4) Promedio de las motos cilindrada 200
*/


    var continua;
	var mensaje;
	var nombre;
    var marca;
	var numeroCompetidor;
	var edad;
	var vueltas;
	var posicionCarrera;
	var flagRapido;
	var maxRapido;
	var contadorHondas = 0;
	var promedioVueltas;
	var a;
	var a;
	var a;
	var a;
	do
	{
		do
		{
			nombre = prompt("Ingrese nombre del competidor").toLowerCase();
		}while(!isNaN(nombre));
        
        do
        {
            numeroCompetidor = prompt("Ingrese");
            numeroCompetidor = parseFloat(numeroCompetidor);
        }while(isNaN(numeroCompetidor) );
		do
		{
			marca = prompt("Ingrese marca: honda, yamaha, suzuki").toLowerCase();
		}while(marca != "honda" && marca != "yamaha" && marca != "suzuki");
        
        do
        {
            edad = prompt("Ingrese edad");
            edad = parseInt(edad);
        }while(isNaN(edad) && edad < 0);

        do
		{
			vueltas = prompt("Ingrese");
			cd = parseFloat(cd);
		}while(isNaN(cd) || vueltas < 4);
		do
		{
			posicionCarrera = prompt("Ingrese posicion en carrera").toLowerCase();
		}while(!isNaN(posicionCarrera));
        //1) Informar el número del competidor más rápido en promedio
        if(flagRapido == 0 || vueltas > maxRapido)
        {
            maxRapido = vueltas;
            flagRapido = 1;
        }
        promedioVueltas = vueltas ;
        if(marca == "honda")
        {
            contadorHondas++;
        }
        else
        {}
		
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparmarcaion 
	//muestro
	mensaje = "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	alert(mensaje);


