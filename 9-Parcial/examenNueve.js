
/**************************
Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar:

- el deposito, validar si esta disponible

- una descripcion del producto en cuestion, 

- el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

pido: descripcion, peso, 

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio 
     pide nombre del producto Mas pesado , flag  
b) Cual fue la bodega con mas ingresos. | flag
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

    dentro                                  fuera
a   flagMasPesado   nombre del producto    promedio
b   flagMasIngresos nombre de la bodega       comparo los acumuladores        
c   flag
d   

***************************/

function comenzar()
{
    let AVELLANEDA = 20000;
    let CABA = 25000;
    let LANUS = 15000;
	let continua;
	let mensaje;
    let nombreBodega;
    let descripcionProducto;
    let acumuladorAvellaneda= 0;
    let acumuladorCaba = 0;
    let acumuladorLanus = 0;
    //a
    let flag = 0;
    let pesoMaximo;
    let nombreProductoMax;
    let pesoAvellaneda = 0;
	let pesoCABA = 0;
	let pesoLanus = 0;
    let ingresosCABA = 0;
    let ingresosLanus=0;
    let ingresosAvellaneda=0;
    let bodegaMasIngresos;
    let promedioPeso;
	
	do
	{
        do
        {
         nombreBodega = prompt("Ingrese nombreBodega").toLowerCase();
        }while (nombreBodega != "caba" && nombreBodega != "avellaneda" && nombreBodega != "lanus");
        do
        {
            descripcionProducto = prompt("Ingrese descripcionProducto").toLowerCase();
        }while(!isNaN(descripcionProducto));
        let pesoDeposito;
        do
        {
            pesoDeposito = prompt("Ingrese pesoDeposito");
            pesoDeposito = parseFloat(pesoDeposito);
        }while(isNaN(pesoDeposito) || pesoDeposito < 0);
/************************************************************************** */
        if(flag == 0 || pesoDeposito > pesoMaximo)
        {
            pesoMaximo = pesoDeposito;
            nombreProductoMax = descripcionProducto;
            flag = 1;
        }
        else
        {
            if(nombreBodega == "avellaneda")
            {
                if((pesoAvellaneda + pesoDeposito) > AVELLANEDA)
                {
                    alert("Esta bodega superó su limite");
                }
                else
                {
                    pesoAvellaneda += pesoDeposito;
                    ingresosAvellaneda++;
                }
            }
            else
            {
                if(nombreBodega == "caba")
                {
                    if((pesoCABA + pesoDeposito) > CABA)
                    {
                        alert("Esta bodega superó su limite");
                    }
                    else
                    {
                        pesoCABA += pesoDeposito;
                        ingresosCABA++;
                    }
                }
                else
                {
                    if((pesoLanus + pesoDeposito) > LANUS)
                    {
                        alert("Esta bodega superó su limite");
                    }
                    else
                    {
                        pesoLanus += pesoDeposito;
                        ingresosLanus++;
                    }
                }
            }
        }
		continua = confirm("Quieres continuar?");
	}while(continua);
    /*********************************************** */
    //a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio 
    promedioPeso =  pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

	//b) Cual fue la bodega con mas ingresos. 
    if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus)
    {
        bodegaMasIngresos = "Avellaneda";
    }
    else
    {
        if(ingresosCABA > ingresosAvellaneda && ingresosCABA > ingresosLanus)
        {
            bodegaMasIngresos = "CABA";
        }
        else
        {
            bodegaMasIngresos = "Lanus";
        }
    }
    //c) Cual es la bodega mas llena.
    if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus)
    {
        let bodegaMasLlena;
        bodegaMasLlena = "\n la bodega mas llena mas llena es Avellaneda";
    }
    else
    {
        if(pesoCABA > pesoAvellaneda && pesoCABA > pesoLanus)
        {
            bodegaMasLlena = "\n la bodega mas llena mas llena es CABA";
        }
        else
        {
            bodegaMasLlena = "\n la bodega mas llena mas llena es Lanus";
        }
    }
    //d) Porcentaje disponible de cada bodega.
    // Porcentaje = (suma de manzanas(acumulador) / total ingresados (contador)) * 100
    // pesoAvellaneda * 100 / AVELLANEDA 
    let porcentajeAvellaneda;
    let porcentajeCABA;
    let porcentajeLanus;
    /*
    CABA(kg)________________100%
    pesoAcumulado(kg)_______x %
    */
    porcentajeAvellaneda =( pesoAvellaneda*100 )/ AVELLANEDA;
    porcentajeCABA = (pesoCABA *100) / CABA;
    porcentajeLanus = (pesoLanus*100) / LANUS;
    if(pesoAvellaneda===0 || pesoCABA===0 || pesoLanus===0 )
    {
        alert("no se puede sacar promedio porque no se puede dividir por cero");
    }
    
	//muestro
	mensaje = "\n a) El producto con mas peso es: " + nombreProductoMax;
	mensaje += "\n a) El peso del producto mas pesado" + pesoMaximo;
	mensaje += "\n b) Cual fue la bodega con mas ingresos.  " + bodegaMasIngresos;
	mensaje += bodegaMasLlena;
	mensaje += "\n d) Porcentaje disponible de cada bodega. "  + a;
	
	alert(mensaje);
}


/********************************************************************************* */
/************************************ R E S U E L T O **************************** */
/********************************************************************************* */

/*
function mostrar()
{
	let TOTAL_AVELLANEDA = 20000;
	let TOTAL_CABA = 25000;
	let TOTAL_LANUS = 15000;

	let pesoAvellaneda;
	let pesoCABA;
	let pesoLanus;
	let pesoProducto;
	let descripcionProducto;
	let deposito;
	let banderaPrimerPesoIngresado;
	let pesoMaximo;
	let productoMaximo;
	let ingresosCABA;
	let ingresosAvellaneda;
	let ingresosLanus;
	let mensajeDeSalida;

	pesoAvellaneda = 0;
	pesoCABA = 0;
	pesoLanus = 0;
	ingresosCABA = 0;
	ingresosAvellaneda = 0;
	ingresosLanus = 0;
	banderaPrimerPesoIngresado = true;

	do{

		do {
            deposito = prompt("Ingrese el deposito").toLowerCase();
        }while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus");

		do{
			descripcionProducto = prompt("Ingrese la descripcion del producto");
		}while(!isNaN(descripcionProducto));

		do{
			pesoProducto = prompt("Ingrese el peso del producto");
			pesoProducto = parseFloat(pesoProducto);
		}while(isNaN(pesoProducto));

		if(banderaPrimerPesoIngresado || pesoProducto > pesoMaximo){
			pesoMaximo = pesoProducto;
			productoMaximo = descripcionProducto;
			banderaPrimerPesoIngresado = false;
		}

		if(deposito == "caba"){
			if((pesoCABA + pesoProducto) > TOTAL_CABA){
				alert("Deposito lleno");
				continue;
			}
			else{
				pesoCABA += pesoProducto;
				ingresosCABA++;
			}
		}
		else{
			if(deposito == "avellaneda"){
				if((pesoAvellaneda + pesoProducto) > TOTAL_AVELLANEDA){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoAvellaneda += pesoProducto;
					ingresosAvellaneda++;
				}
			}
			else{
				if((pesoLanus + pesoProducto) > TOTAL_LANUS){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoLanus += pesoProducto;
					ingresosLanus++;
				}
			}
		}

	}while(confirm("Desea realizar otro deposito?"));

	//A:
	mensajeDeSalida = "a) El producto con mas peso es: " + productoMaximo + " con " + pesoMaximo + " KG.\ Su promedio es: " + pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

	//B:
	if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus){
		mensajeDeSalida += "\nb) La bodega con mas ingresos es: Avellaneda";
	}
	else{
		if(ingresosCABA > ingresosLanus){
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: CABA";
		}
		else{
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: Lanus";
		}
	}

	//C:
	if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus){
		mensajeDeSalida += "\nc) La bodega mas llena es: Avellaneda";
	}
	else{
		if(pesoCABA > pesoLanus){
			mensajeDeSalida += "\nc) La bodega mas llena es: CABA";
		}
		else{
			mensajeDeSalida += "\nc) La bodega mas llena es: Lanus";
		}
	}

	//D:
	mensajeDeSalida += "\nd) Avellaneda: %" + pesoAvellaneda * 100 / TOTAL_AVELLANEDA + "\nCABA: % " + pesoCABA * 100 / TOTAL_CABA + "\nLanus: % " + pesoLanus * 100 / TOTAL_LANUS;

	alert(mensajeDeSalida);
}

*/