
/**************************
Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)
    Avellaneda (20.000KG) - CABA (25.000KG) - Lanus (15.000 KG)
Para poder almacenar los productos correctamente se debera ingresar:

- el deposito, validar si esta disponible // Avellaneda (20.000KG) - CABA (25.000KG) - Lanus (15.000 KG)

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
    let continua;
	let mensaje;
    let LIMITECABA=25000; 
    let LIMITEAVELLANEDA=20000;
    let LIMITELANUS=15000;
    let nombreBodega;
    let ingresosAvellaneda =0;
    let nombreProducto;
    let acumuladorPesoAvellaneda = 0;
    let acumuladorPesoCABA = 0;
    let acumuladorPesoLanus = 0;
    let pesoProducto;
    let ingresosCABA =0;
    let primerIngreso = 0;
    let productoMasPesado;
    let ingresosLanus =0;
    let nombreProductoMasPesado;
    let promedioProductoMasPesado;
    let porcentajeDisponibleCABA;
    let porcentajeDisponibleAvellaneda;
    let porcentajeDisponibleLanus;
    let porcentajeAcumuladoCABA;
    let porcentajeAcumuladoAvellaneda;
    let porcentajeAcumuladoLanus;

	do
	{
        do
        {
            nombreBodega = prompt("Ingrese nombreBodega").toLowerCase();
        }while(nombreBodega != "caba" && nombreBodega != "avellaneda" && nombreBodega != "lanus");

        do
        {
            nombreProducto = prompt("Ingrese nombreProducto").toLowerCase();
        }while(!isNaN(nombreProducto));

        do
        {
            pesoProducto = prompt("Ingrese pesoProducto");
            pesoProducto = parseFloat(pesoProducto);
        }while(isNaN(pesoProducto) || pesoProducto < 0);

        //validar si esta disponible las bodegas

        if(nombreBodega == "avellaneda")
        {
            if((acumuladorPesoAvellaneda+pesoProducto) > LIMITEAVELLANEDA )
            {
                alert("Exedió el limite");
            }
            else
            {
                acumuladorPesoAvellaneda+=pesoProducto;
                ingresosAvellaneda++;
            }
        }
        else
        {
            if(nombreBodega=="caba")
            {
                if((acumuladorPesoCABA+pesoProducto) > LIMITECABA)
                {
                    alert("Exedió el limite");
                }
                else
                {
                    acumuladorPesoCABA+=pesoProducto;
                    ingresosCABA++;
                }
            }
            else
            {
                if((acumuladorPesoLanus+pesoProducto) > LIMITELANUS)
                {
                    alert("Exedió el limite");
                }
                else
                {
                    acumuladorPesoLanus+=pesoProducto;
                    ingresosLanus++;
                }
            }
        }
        //a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio 
        
        if(primerIngreso == 0 || pesoProducto > productoMasPesado)
        {
            productoMasPesado = pesoProducto;
            nombreProductoMasPesado = nombreProducto;
            primerIngreso = 1;
        }
        



        /********************************************** */
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparacion 
    /********************************************* */
    //a
    promedioProductoMasPesado = productoMasPesado / (acumuladorPesoLanus + acumuladorPesoCABA + acumuladorPesoAvellaneda);
    //b
    let bodegaConMasIngresos;
    if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus)
    {
        bodegaConMasIngresos = "AVELLANEDA \n b) la cantidad de veces fue " + ingresosAvellaneda;
    }
    else
    {
        if(ingresosCABA > ingresosAvellaneda && ingresosCABA > ingresosLanus)
        {
            bodegaConMasIngresos = "CABA \n b) la cantidad de veces fue "+ingresosCABA ;
        }
        else
        {
            bodegaConMasIngresos = "LANUS \n b) la cantidad de veces fue " + ingresosLanus;
        }
    }
    //c
    let bodegaMasLlena;
    if(acumuladorPesoAvellaneda > acumuladorPesoCABA & acumuladorPesoAvellaneda > acumuladorPesoLanus)
    {
        bodegaMasLlena = "AVELLANEDA";
    }
    else
    {
        if(acumuladorPesoCABA > acumuladorPesoLanus && acumuladorPesoCABA > acumuladorPesoAvellaneda)
        {
            bodegaMasLlena = "CABA";
        }
        else
        {
            bodegaMasLlena = "AVELLANEDA";
        }
    }
    //d
    //para saber cuanto es el porcentaje que acumulo
    // limitebodega (kg)_______100%
    // acumulador(kg)_________x%(porcentajeAcumulado)
    //porcentajeDisponible = 100 - porcentajeAcumulado 
   


    // PROFE:
    //PORCENTAJE RESTO
    // acumulador(kg)_______100%
    // limiteBodega(kg)_____x%   
    
    if(acumuladorPesoCABA===0)
    {
        porcentajeDisponibleCABA = "100";
    }
    else
    {
        porcentajeAcumuladoCABA = (acumuladorPesoCABA* 100 )/ LIMITECABA ;
        porcentajeDisponibleCABA =  100 -porcentajeAcumuladoCABA ;
      
    }
    
    if(acumuladorPesoAvellaneda === 0)
    {
        porcentajeDisponibleAvellaneda = "100";
    }
    else
    {
        porcentajeAcumuladoAvellaneda =( acumuladorPesoAvellaneda*100)/LIMITEAVELLANEDA;
        porcentajeDisponibleAvellaneda = 100-porcentajeAcumuladoAvellaneda;
        
    }
    
    if(acumuladorPesoLanus ===0)
    {
        porcentajeDisponibleLanus="100";
    }
    else
    {
        porcentajeAcumuladoLanus= (acumuladorPesoLanus*100) / LIMITELANUS;
        porcentajeDisponibleLanus = 100-porcentajeAcumuladoLanus;
       
    }

	//muestro
	mensaje = "\n a) producto con mas peso entre las tres bodegas " + nombreProductoMasPesado +"\n a) su cantidad de peso es de " + productoMasPesado;
	mensaje += "\n a) promedio del producto mas pesado es " + promedioProductoMasPesado;
	mensaje += "\n b)la bodega con mas ingresos fue  : " + bodegaConMasIngresos;
    mensaje += "\n c) la bodega mas llena es: " + bodegaMasLlena;
    mensaje += "\n d) El porcentaje disponible de avellaneda es " + porcentajeDisponibleAvellaneda + "%";
    mensaje += "\n d) El porcentaje disponible de caba es " + porcentajeDisponibleCABA + "%";
    mensaje += "\n d) El porcentaje disponible de lanus es " +  porcentajeDisponibleLanus+ "%";
	alert(mensaje);
	
}









// function comenzar()
// {
    
//     let continua;
//     let mensaje;
//     let nombreBodega;
//     let nombreProducto;
//     let pesoProducto;
// 	let AVELLANEDA = 20000;
//     let contadorIngressosAvellaneda = 0;
//     let acumuladorAvellaneda = 0;
// 	let CABA = 25000;
// 	let LANUS = 15000;
//     let primerIngreso = 0;
//     let productoMasPeso;
//     let acumuladorCABA=0;
//     let nombreProductoMasPeso;
//     let pesoAvellaneda;
//     let pesoCABA;
//     let pesoLanus;
//     let acumuladorLanus = 0;
//     let promedioMasPesado;
//     let bodegaConMasIngresos;
//     let contadorIngresosLanus = 0;
//     let contadorIngresosCABA = 0;
	
// 	do
// 	{
		
//         do
//         {
//             nombreBodega = prompt("Ingrese nombreBodega").toLowerCase();
//         }while(nombreBodega != "lanus" && nombreBodega != "caba" && nombreBodega != "avellaneda");

//         do
//         {
//             nombreProducto = prompt("Ingrese nombreProducto").toLowerCase();
//         }while(!isNaN(nombreProducto));
        
//         do
//         {
//             pesoProducto = prompt("Ingrese pesoProducto");
//             pesoProducto = parseInt(pesoProducto);
//         }while(isNaN(pesoProducto) || pesoProducto < 0);

//         // a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio 
//         if(primerIngreso == 0 || pesoProducto > productoMasPeso)
//         {
//             productoMasPeso = pesoProducto;
//             nombreProductoMasPeso = nombreProducto;
//             primerIngreso = 1;
//         }
//       /************************************** */
//       // Avellaneda (20.000KG) - CABA (25.000KG) - Lanus (15.000 KG)
//       //promedioMasPesado = pesoMasPesado / (pesoAvellaneda + pesoCABA + pesoLanus);
//       //b) Cual fue la bodega con mas ingresos. 
//         if(nombreBodega == "avellaneda")
//         {
//             if((acumuladorAvellaneda + pesoProducto) > AVELLANEDA)
//             {
//                 alert("Se llenó la bodega AVELLANEDA");
//             }
//             else
//             {
//                 acumuladorAvellaneda += pesoProducto;
//                 //b
//                 contadorIngressosAvellaneda++;
//             }
//         }
//         else
//         {
//             if(nombreBodega == "caba")
//             {
//                 if((acumuladorCABA + pesoCABA) > CABA)
//                 {
//                     alert("Se llenó la bodega CABA");
//                 }
//                 else
//                 {
//                 acumuladorCABA += pesoProducto;
//                 //b
//                 contadorIngresosCABA++;
//                 }
//             }
//             else //lanus
//             {
//                 if((acumuladorLanus+pesoProducto)>LANUS)
//                 {
//                     alert("Se llenó la bodega LANUS");
//                 }
//                 else
//                 {
//                     acumuladorLanus += pesoProducto;
//                     //B
//                     contadorIngresosLanus++;
//                 }
//             }
//         }
        
    
//         /******************************************* */
// 		continua = confirm("Quieres continuar?");
// 	}while(continua);
//     // promedio =  peso / suma de todos los pesos; 
//     //promerdio = pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);
//         promedioMasPesado = productoMasPeso / (acumuladorAvellaneda + acumuladorCABA + acumuladorLanus);
//         mensaje = "\n a) el producto mas pesado es : " + productoMasPeso + "\n b) su promedio es de " + promedioMasPesado;
//     //b bodega con mas ingresos
//     if(contadorIngresosCABA > contadorIngresosLanus && contadorIngresosCABA > contadorIngressosAvellaneda)
//     {
//         mensaje += "\n b) La bodega con mas ingresos es CABA ";
//     }
//     else
//     {
//         if(contadorIngresosLanus > contadorIngresosCABA && contadorIngresosLanus > contadorIngressosAvellaneda)
//         {
//             mensaje += "\n b) La bodega con mas ingresos es LANUS ";
//         }
//         else
//         {
//             mensaje += "\n b) La bodega con mas ingresos es AVELLANEDA ";        }
//     }
    


    // if(acumulador o contador > 0)
    // {
    //     //aca calculo el promedio
    //     promedio = (suma de los términos) / (número de términos);
    // }
    // else
    // {
    //     promedio = 0;
    //     mensaje = "No se puede calcular";
    // }
        


	//calculo o comparacion 
	//muestro
	// mensaje = "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
// 	alert(mensaje);
	

// }















































// function comenzar()
// {
//     let AVELLANEDA = 20000;
//     let CABA = 25000;
//     let LANUS = 15000;
// 	let continua;
// 	let mensaje;
//     let nombreBodega;
//     let descripcionProducto;
//     let acumuladorAvellaneda= 0;
//     let acumuladorCaba = 0;
//     let acumuladorLanus = 0;
//     //a
//     let flag = 0;
//     let pesoMaximo;
//     let nombreProductoMax;
//     let pesoAvellaneda = 0;
// 	let pesoCABA = 0;
// 	let pesoLanus = 0;
//     let ingresosCABA = 0;
//     let ingresosLanus=0;
//     let ingresosAvellaneda=0;
//     let bodegaMasIngresos;
//     let promedioPeso;
	
// 	do
// 	{
//         do
//         {
//          nombreBodega = prompt("Ingrese nombreBodega").toLowerCase();
//         }while (nombreBodega != "caba" && nombreBodega != "avellaneda" && nombreBodega != "lanus");
//         do
//         {
//             descripcionProducto = prompt("Ingrese descripcionProducto").toLowerCase();
//         }while(!isNaN(descripcionProducto));
//         let pesoDeposito;
//         do
//         {
//             pesoDeposito = prompt("Ingrese pesoDeposito");
//             pesoDeposito = parseFloat(pesoDeposito);
//         }while(isNaN(pesoDeposito) || pesoDeposito < 0);
// /************************************************************************** */
//         if(flag == 0 || pesoDeposito > pesoMaximo)
//         {
//             pesoMaximo = pesoDeposito;
//             nombreProductoMax = descripcionProducto;
//             flag = 1;
//         }
//         else
//         {
//             if(nombreBodega == "avellaneda")
//             {
//                 if((pesoAvellaneda + pesoDeposito) > AVELLANEDA)
//                 {
//                     alert("Esta bodega superó su limite");
//                 }
//                 else
//                 {
//                     pesoAvellaneda += pesoDeposito;
//                     ingresosAvellaneda++;
//                 }
//             }
//             else
//             {
//                 if(nombreBodega == "caba")
//                 {
//                     if((pesoCABA + pesoDeposito) > CABA)
//                     {
//                         alert("Esta bodega superó su limite");
//                     }
//                     else
//                     {
//                         pesoCABA += pesoDeposito;
//                         ingresosCABA++;
//                     }
//                 }
//                 else
//                 {
//                     if((pesoLanus + pesoDeposito) > LANUS)
//                     {
//                         alert("Esta bodega superó su limite");
//                     }
//                     else
//                     {
//                         pesoLanus += pesoDeposito;
//                         ingresosLanus++;
//                     }
//                 }
//             }
//         }
// 		continua = confirm("Quieres continuar?");
// 	}while(continua);
//     /*********************************************** */
//     //a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio 
//     promedioPeso =  pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

// 	//b) Cual fue la bodega con mas ingresos. 
//     if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus)
//     {
//         bodegaMasIngresos = "Avellaneda";
//     }
//     else
//     {
//         if(ingresosCABA > ingresosAvellaneda && ingresosCABA > ingresosLanus)
//         {
//             bodegaMasIngresos = "CABA";
//         }
//         else
//         {
//             bodegaMasIngresos = "Lanus";
//         }
//     }
//     //c) Cual es la bodega mas llena.
//     if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus)
//     {
//         let bodegaMasLlena;
//         bodegaMasLlena = "\n la bodega mas llena mas llena es Avellaneda";
//     }
//     else
//     {
//         if(pesoCABA > pesoAvellaneda && pesoCABA > pesoLanus)
//         {
//             bodegaMasLlena = "\n la bodega mas llena mas llena es CABA";
//         }
//         else
//         {
//             bodegaMasLlena = "\n la bodega mas llena mas llena es Lanus";
//         }
//     }
//     //d) Porcentaje disponible de cada bodega.
//     // Porcentaje = (suma de manzanas(acumulador) / total ingresados (contador)) * 100
//     // pesoAvellaneda * 100 / AVELLANEDA 
//     let porcentajeAvellaneda;
//     let porcentajeCABA;
//     let porcentajeLanus;
//     /*
//     CABA(kg)________________100%
//     pesoAcumulado(kg)_______x %
//     */
//     porcentajeAvellaneda =( pesoAvellaneda*100 )/ AVELLANEDA;
//     porcentajeCABA = (pesoCABA *100) / CABA;
//     porcentajeLanus = (pesoLanus*100) / LANUS;
//     if(pesoAvellaneda===0 || pesoCABA===0 || pesoLanus===0 )
//     {
//         alert("no se puede sacar promedio porque no se puede dividir por cero");
//     }
    
// 	//muestro
// 	mensaje = "\n a) El producto con mas peso es: " + nombreProductoMax;
// 	mensaje += "\n a) El peso del producto mas pesado" + pesoMaximo;
// 	mensaje += "\n b) Cual fue la bodega con mas ingresos.  " + bodegaMasIngresos;
// 	mensaje += bodegaMasLlena;
// 	mensaje += "\n d) Porcentaje disponible de cada bodega. "  + a;
	
// 	alert(mensaje);
// }


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
*********************************
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