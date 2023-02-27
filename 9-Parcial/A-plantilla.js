

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
			ac = prompt("Ingrese").toLowerCase();
		}while(ac != "a" && ac != "a" && ac != "a");

		
		do
		{
			bc = prompt("Ingrese");
			bc = parseInt(bc);
		}while(isNaN(bc) && bc < 0);
		
		do
		{
			cd = prompt("Ingrese");
			cd = parseFloat(cd);
		}while(isNaN(cd) && (cd < 10 || cd > 100));

		do
		{
			df = prompt("Ingrese").toLowerCase();
		}while(!isNaN(df) || (df != "a" && df != "a"));

		do
		{
			dfg = prompt("Ingrese").toLowerCase();
		}while(!isNaN(dfg) || (dfg != "a" && dfg != "a"));

		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparacion 
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


