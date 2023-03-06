
/**************************
Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)
Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, 
y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.
pido: descripcion, peso, 
Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.
***************************/

function comenzar()
{
    let continua;
	let mensaje;
    let LIMITE_AVELLANEDA = 20000;
    let LIMITE_CABA=25000;
    let LIMITE_LANUS=15000;
    let depositoProducto;
    let acumuladorCABA=0;
    let acumuladorAvellaneda=0;
    let acumuladorLanus=0;
    let descripcionProducto;
    let pesoProducto;
    let flagPeso = 0;
    let productoConMasPeso;
    let nombreProductoConMasPeso;
    let contadorIngresosAvellaneda=0;
	let contadorIngresosCaba=0;
    let contadorIngresosLanus=0;
    let laBodegaConMasIngresos;
    let porcentajeDisponibleCABA;
    let porcentajeDisponibleAvellaneda;
    let pocentajeDisponibleLanus;
    let laBodegaMasLlena;
    let contadorIngresosGenerales=0;
	
	do
	{
        do
        {
            depositoProducto = prompt("Ingrese a donde depositara el Producto: caba lanus o avellaneda").toLowerCase();
        }while(depositoProducto != "caba" && depositoProducto != "lanus" && depositoProducto != "avellaneda");
        do
        {
            descripcionProducto = prompt("Ingrese descripcionProducto").toLowerCase();
        }while(!isNaN(descripcionProducto));
        do
        {
            pesoProducto = prompt("Ingrese pesoProducto");
            pesoProducto = parseInt(pesoProducto);
        }while(isNaN(pesoProducto) || pesoProducto < 0);

        if(depositoProducto =="avellaneda")
        {
            if((acumuladorAvellaneda + pesoProducto) > LIMITE_AVELLANEDA)
            {
                alert("Esta bodega excedió el limite");
            }
            else
            {
                acumuladorAvellaneda+=pesoProducto;
                //B
                contadorIngresosAvellaneda++;
            }
        }
        else
        {
            if(depositoProducto=="caba")
            {
                if(acumuladorCABA+pesoProducto > LIMITE_CABA)
                {
                    alert("Esta bodega excedió el limite");
                }
                else
                {
                    acumuladorCABA+=pesoProducto;
                    //B
                    contadorIngresosCaba++;
                }
            }
            else
            {
                if((acumuladorLanus+pesoProducto)> LIMITE_LANUS)
                {
                    alert("Esta bodega excedió el limite");
                }
                else
                {
                    acumuladorLanus+=pesoProducto;
                    //B
                    contadorIngresosLanus++;
                }
            }
        }
        //A
        if(flagPeso == 0 || pesoProducto > productoConMasPeso)
        {
            productoConMasPeso = pesoProducto;
            nombreProductoConMasPeso = descripcionProducto;
            flagPeso = 1;
        }
        //D
        contadorIngresosGenerales++;



		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    //B
    if(contadorIngresosCaba > contadorIngresosAvellaneda && contadorIngresosCaba > contadorIngresosLanus)
	{
        laBodegaConMasIngresos = "Caba";
    }
    else
    {
        if(contadorIngresosAvellaneda > contadorIngresosLanus && contadorIngresosAvellaneda > contadorIngresosCaba)
		{
            laBodegaConMasIngresos = "Avellaneda";
        }else{
            laBodegaConMasIngresos = "Lanus";
        }
    }

    //C
    if(acumuladorCABA > acumuladorAvellaneda && acumuladorCABA > acumuladorLanus)
	{
        laBodegaMasLlena = "CABA";
    }else{
        if(acumuladorAvellaneda > acumuladorLanus && acumuladorAvellaneda > acumuladorCABA)
		{
            laBodegaMasLlena = "AVELLANEDA";
        }else{
            laBodegaMasLlena = "LANUS";
        }
    }
    //D
    //limiteBodega(kg) ___ 100%
    //acumulador(kg)______x %
    if(acumuladorCABA != 0)
    {
        porcentajeDisponibleCABA = 100 - ((acumuladorCABA * 100)/ LIMITE_CABA);
    }
    else
    {
        porcentajeDisponibleCABA = 0;
    }

    if(acumuladorAvellaneda != 0)
    {
        porcentajeDisponibleAvellaneda = 100 - ((acumuladorAvellaneda*100)/LIMITE_AVELLANEDA);
    }
    else
    {
        porcentajeDisponibleAvellaneda = 0;
    }
    if(acumuladorLanus!=0)
    {
        pocentajeDisponibleLanus = 100-((acumuladorLanus*100)/LIMITE_LANUS);
    }
    else
    {
        pocentajeDisponibleLanus=0;
    }

	//muestro
	mensaje = "\n A- nombre Producto Con Mas Peso " + nombreProductoConMasPeso;
	mensaje += "\n B- la Bodega Con Mas Ingresos " + laBodegaConMasIngresos;
	mensaje += "\n C- la Bodega Mas Llena" + laBodegaMasLlena;
	mensaje += "\n D- porcentaje disponible de la bodega CABA" + porcentajeDisponibleCABA + "%";
	mensaje += "\n D- porcentaje disponible de la bodega AVELLANEDA " + porcentajeDisponibleAvellaneda+ "%";
	mensaje += "\n D- porcentaje disponible de la bodega LANUS " + pocentajeDisponibleLanus+ "%";
	
	alert(mensaje);
	

}