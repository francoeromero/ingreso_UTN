/*
El usuario debe ingresar las cotizaciones semanales del dólar (semana laboral de 5 días), los valores deben ser positivos:
Se debe Informar al usuario lo siguiente:
1) Informar cuál fue el dólar con mayor cotización promedio en la semana ()
2) informar cotización más alta del dólar oficial
3) Informar cotización más baja del dólar blue

validar:
-cotizacionDolarHoy(mayor a 0)
calculo:
1- sacar el promedio = suma de todos las cotizacionDolarHoy / diasHabiles(5) 
2- sacar el mas alto de los 5 diasHabiles
3- sacar el mas bajo de los 5 diasHabiles
*/

    var diasHabiles = 0;
	var mensaje;
	var dolarBlue;
    var dolarOficial;
	var promedioDolar;
	
    var flagBlue = 0;
    var flagOficial = 0;
    

	var minDolarBlue;
	var maxDolarBlue;
    var minDolarOficial;
    var maxDolarOficial;

    var acumuladorDolarBlue = 0;
    var acumuladorDolarOficial = 0; 
    var promedioDolarBlue;
    var promedioDolarOficial;
    let i;
    for(i = 0; i < 5; i++)
    {
        //validacion
		do
		{
			dolarBlue = prompt("Ingrese dolar Blue");
			dolarBlue = parseFloat(dolarBlue);
		}while(isNaN(dolarBlue) && dolarBlue < 0);
		do
		{
			dolarOficial = prompt("Ingrese dolar Oficial");
			dolarOficial = parseFloat(dolarOficial);
		}while(isNaN(dolarOficial) && dolarOficial < 0);
        //a
        acumuladorDolarBlue += dolarBlue;
        acumuladorDolarOficial += dolarOficial;
        //b
        //blue
        if(flagBlue == 0)
        {
            maxDolarBlue = dolarBlue;
            minDolarBlue = dolarBlue;
            flagBlue = 1;
        }
        else
        {
            if(dolarBlue > maxDolarBlue)
            {
                maxDolarBlue = dolarBlue;
            }
            else 
            {
                if(dolarBlue < minDolarBlue)
                {
                    minDolarBlue = dolarBlue;
                }
            }
        }
        //oficial
        if(flagOficial == 0)
        {
            maxDolarOficial = dolarOficial;
            minDolarOficial = dolarOficial;
            flagOficial = 1;
        }
        else
        {
            if(dolarOficial > maxDolarOficial)
            {
                maxDolarOficial = dolarOficial;
            }
            else
            {
                if(dolarOficial < minDolarOficial)
                {
                    minDolarOficial = dolarOficial;
                }
            }
        }
        
    }
    promedioDolarBlue = acumuladorDolarBlue / i;
    promedioDolarOficial = acumuladorDolarOficial / i;
    mensaje = "\n El promedio del dolar blue es : " + promedioDolarBlue;
    mensaje += "\n El promedio del dolar Oficial es: " + promedioDolarOficial;
    mensaje += "\n El dolar blue mas alto de la semana fue de : " + maxDolarBlue;
    mensaje += "\n El dolar blue mas bajo de la semana fue de : " + minDolarBlue;
    mensaje += "\n El dolar oficial mas alto de la semana fue de : " + maxDolarOficial;
    mensaje += "\n El dolar oficial mas bajo de la semana fue de : " + minDolarOficial;
    alert(mensaje);
    
    
    
    
            // if (flag == 0)
            // {
            // 	max = numIngresado;
            // 	min = numIngresado;
            // 	flag = 1;
            // }
            // else
            // {
            // 	//defino si es max  
            // 	if(numIngresado > max)
            // 	{
            // 		max = numIngresado;
            // 	}
            // 	else
            // 	{
            // 		if(numIngresado < min)
            // 		{
            // 			min = numIngresado;
            // 		}
            // 	}
            // }
    
            //b
            // if(flagBlue == 0 || dolarBlue > maxDolarBlue )
            // {
            //     maxDolarBlue = dolarBlue;
            //     flagBlue = 1;
            // }
            // if(flagBlue == 0 || dolarBlue < minDolarBlue)
            // {
            //     minDolarBlue = dolarBlue;
            //     flagBlue = 1;
            // }
            // if(flagOficial == 0 ||dolarOficial > maxDolarOficial)
            // {
            //     maxDolarOficial = dolarOficial;
            //     flagOficial = 1;
            // }
            // if(flagOficial == 0 ||dolarOficial < minDolarOficial)
            // {
            //     minDolarOficial = dolarOficial;
            //     flagOficial = 1;
            // }
    
    
    