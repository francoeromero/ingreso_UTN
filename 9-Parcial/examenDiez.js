
/*
2. Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.

*/


function comenzar()
{
    let continua;
	let mensaje;
	let titulo;
    let tituloLibro;
    let primerIngreso = 0;
    let MasBaratoDrama;
    let importeMasBaratoLibroDrama;
    let nombreMasBaratoDrama;
    let contadorVentaDrama= 0;
    let materialLibro;
    let contadorVentaCiencia = 0;
    let importeLibro;
    let contadorVentasIngresadas = 0;
    let flagPrimeroDrama = 0;
    let contadorVentaTerror = 0;
    let primeroDrama;
    
    
    

	do
	{
        do
        {
            tituloLibro = prompt("Ingrese tituloLibro").toLowerCase();
        }while(!isNaN(tituloLibro));
        let generoLibro;
        do
        {
            generoLibro = prompt("Ingrese generoLibro").toLowerCase();
        }while(generoLibro != "drama" && generoLibro != "terror" && generoLibro != "ciencia ficcion");
        do
        {
            materialLibro = prompt("Ingrese materialLibro").toLowerCase();
        }while( materialLibro != "rustica" && materialLibro != "tapa dura");
        do
        {
            importeLibro = prompt("Ingrese importeLibro");
            importeLibro = parseInt(importeLibro);
        }while(isNaN(importeLibro) || importeLibro < 0);
        
        // El más barato de los libros de drama con su importe
        
        
        if(generoLibro == "drama")
        {  
            if(primerIngreso == 0 || importeLibro < MasBaratoDrama)
            {
                MasBaratoDrama = importeLibro;
                nombreMasBaratoDrama = tituloLibro;
                primerIngreso = 1;
            }
            
            if(flagPrimeroDrama == 0)
            {
                primeroDrama = tituloLibro;
                flagPrimeroDrama = 1;
            }

            contadorVentaDrama++; 
        }
        else
        {
            if(generoLibro == "ciencia ficcion")
            {
                contadorVentaCiencia++;
            }
            else
            {
                contadorVentaTerror++;
            }
        }
        contadorVentasIngresadas++;
        
        
		continua = confirm("Quieres continuar?");
	}while(continua);
    /***************************************************** */
    //Qué porcentaje de cada género se vendió.
 //para saber cuanto es el porcentaje que acumulo
    // contadorVentasIngresadas ()_______100%
    // contadorVentaTerror()_________x%(porcentajeAcumulado)
    let porcentajeVentasTerror;
    let porcentajeVentasCiencia;
    let porcentajeVentasDrama;

    if(contadorVentaTerror===0)
    {
        porcentajeVentasTerror= "0";
    }
    else
    {
       porcentajeVentasTerror= (contadorVentaTerror*100 )/ contadorVentasIngresadas;
    }

    if(contadorVentaDrama===0)
    {
        porcentajeVentasDrama = "0";
        MasBaratoDrama = "No hay ventas de Drama";
    }
    else
    {
        porcentajeVentasDrama= (contadorVentaDrama*100) / contadorVentasIngresadas;
    }

    if(contadorVentaCiencia===0)
    {
        porcentajeVentasCiencia = "0";
    }
    else
    {
        porcentajeVentasCiencia= (contadorVentaCiencia*100) / contadorVentasIngresadas;
    }

	
	// muestro
	mensaje = "\n a) El más barato de los libros de drama con su importe es " + MasBaratoDrama;
	mensaje += "\n b) El porcentaje de ventas de Terror es :" + porcentajeVentasTerror + "%";
	mensaje += "\n  b) El porcentaje de ventas de Ciencia ficcion es " + porcentajeVentasCiencia + "%";
	mensaje += "\n  b) El porcentaje de ventas de Drama es " + porcentajeVentasDrama +"%";
	mensaje += "\n c) El primer titulo de drama que se vendio es:  " + primeroDrama;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	alert(mensaje);
}