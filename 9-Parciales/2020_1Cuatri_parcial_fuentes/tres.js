/********************************************************************************
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura. 
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*****************************************************************************/

function mostrar()
{
	var continua;
	var mensaje;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	//a
	var flagTemperatura = 0;
	var nombreTemperaturaMaxima;
	var maximaTemperatura;
	//b
	var contadorViudos = 0;
	//c
	var contadorSolterosViudos = 0;
	//d
	var contadorTerceraEdadTemp = 0;
	//e
	var contadorSolteros = 0;
	var contadorIngresados = 0;
	var promedioSolteros;
	do
	{
		do
		{
			nombre = prompt("Ingrese nombre: ").toLowerCase();
		}while(!isNaN(nombre));
		do
		{
			edad = prompt("Ingrese edad: ");
			edad = parseInt(edad);
		}while(isNaN(edad) || (edad < 0 || edad > 99));
		do
		{
			temperaturaCorporal = prompt("Ingrese temperatura corporal");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}while(isNaN(temperaturaCorporal));
		do
		{
			sexo = prompt("Ingrese sexo m masculino o f femenino").toLowerCase();
		}while(!isNaN(sexo) || (sexo != "m" && sexo != "f"));

		do
		{
			estadoCivil = prompt("Ingrese estado civil: soltero, casado, divorciado, viudo").toLowerCase();
		}while(!isNaN(estadoCivil) || (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "divorciado" && estadoCivil != "viudo"));
		//a) El nombre de la persona con mas temperatura. 
		if(flagTemperatura == 0 || temperaturaCorporal > maximaTemperatura)
		{
			maximaTemperatura = temperaturaCorporal;
			nombreTemperaturaMaxima = nombre;
			flagTemperatura = 1;
		}
		//b) Cuantos mayores de edad estan viudos
		if(estadoCivil == "viudo")
		{
			if(edad > 17)
			{
				contadorViudos++;
			}
		}
		else 
		{
			if(estadoCivil == "soltero")
			{
				//e
				contadorSolteros++;
			}
		}
		contadorIngresados++;
		//c) La cantidad de hombres que hay solteros o viudos.
		if(estadoCivil == "viudo" || estadoCivil == "soltero")
		{
			contadorSolterosViudos++;
		}
		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if(edad > 60)
		{
			if(temperaturaCorporal > 38)
			{
				contadorTerceraEdadTemp++;
			}
		}	
		
		//fin while
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo
	//e) El promedio de edad entre los hombres solteros.
	promedioSolteros = contadorSolteros / contadorIngresados;
	if(contadorSolteros === 0)
	{
		//no se puede dividir por cero
		promedioSolteros = "\n No se puede sacar el promedio porque la cantidad de solteros es 0";
	}
	//muestro
	mensaje = "\n La persona con mas temperatura corporal: " + nombreTemperaturaMaxima;
	mensaje += "\n La cantidad de viudos mayores de edad: " + contadorViudos;
	mensaje += "\n La cantidad de hombres solteros o viudos: " + contadorSolterosViudos;
	mensaje += "\n La cantidad de personas de mayor a 60 con mas de 38 de temp: " + contadorTerceraEdadTemp;
	mensaje += "\n El promedio de las personas solteras: " + promedioSolteros;

	alert(mensaje);
}

/*
PLANTILLA

var continua;
	var mensaje;
	var a;
	var a;
	var a;
	var a;
	var a;
	var a;
	var a;
	var a;
	do
	{
		do
		{
			ab = prompt("Ingrese").toLowerCase();
		}while(ab != "a" && ab != "a" && ab != "a");

		
		do
		{
			edad = prompt("Ingrese");
			edad = parseFloat(edad);
		}while(isNaN(edad));
		
		do
		{
			temperaturaCorporal = prompt("Ingrese");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}while(isNaN(temperaturaCorporal) && (temperaturaCorporal < 10 || temperaturaCorporal > 100));

		do
		{
			sexo = prompt("Ingrese").toLowerCase();
		}while(!isNaN(sexo) || (sexo != "a" && sexo != "a"));

		if(a)
		{

		}
		else
		{
			if(b)
			{

			}
			else
			{

			}
		}
		
		continua = confirm("Quieres continuar?");
	}while(continua);
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





*/