
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
    let tituloLibro;
	let importeLibro;
	let generoLibro;
	let flag=0;
	let importeMasBarato;
	let primerLibroDrama;
	let contadorDrama=0;
	let contadorFiccion=0;
	let contadorTerror=0;
	let contadorGeneralLibros=0;
	let porcentajeDrama;
	let porcentajeTerror;
	let porcentajeFiccion;
	
	
	do
	{
        do
        {
            tituloLibro = prompt("Ingrese tituloLibro").toLowerCase();
        }while(!isNaN(tituloLibro));
        do
        {
            generoLibro = prompt("Ingrese generoLibro  (ciencia ficción – Drama – Terror)").toLowerCase();
        }while(generoLibro != "ciencia ficcion" && generoLibro != "drama" && generoLibro != "tapa dura");
		do
		{
			importeLibro = prompt("Ingrese importeLibro");
			importeLibro = parseInt(importeLibro);
		}while(isNaN(importeLibro) || importeLibro < 0 || importeLibro > 30000);

		switch (generoLibro) {
			case "drama":
				contadorDrama++;//b
				if(flag==0)
				{
					tituloDramaMasBarato=tituloLibro;//a
					importeMasBarato=importeLibro;//a
					primerLibroDrama=tituloLibro;//c
					flag=1;
				}
				else
				{
					//A
					if(importeLibro<importeMasBarato)
					{
						tituloDramaMasBarato=tituloLibro;
						importeMasBarato=importeLibro;
					}
				}
			break;
			case "ciencia ficcion":
				contadorFiccion++;//b
			break;
			default:
				contadorTerror++;//b
			break;
		}
		contadorGeneralLibros++;
		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
	//contadorGeneral____100%
	//contadorDrama______x%
	if(contadorDrama!=0)
	{
		porcentajeDrama = (contadorDrama*100) / contadorGeneralLibros; 
	}
	else
	{
		porcentajeDrama=0;
	}
	if(contadorFiccion!=0)
	{
		porcentajeFiccion=(contadorFiccion*100)/contadorGeneralLibros;
	}
	else
	{
		porcentajeFiccion=0;
	}
	if(contadorTerror!=0)
	{
		porcentajeTerror=(contadorTerror*100)/contadorGeneralLibros;
	}
	else
	{
		porcentajeTerror=0;
	}
	//muestro
	mensaje = "\n A- El más barato de los libros de drama con su importe. " + tituloDramaMasBarato;
	mensaje += "\n A- El importe es: " + importeMasBarato;
	mensaje += "\n B- porcentaje de terror" + porcentajeTerror + "%";
	mensaje += "\n B- porcentaje de drama" + porcentajeDrama + "%";
	mensaje += "\n B- porcentaje de ciencia ficcion" + porcentajeFiccion + "%";
	mensaje += "\n C- El primer libro de drama vendido : " + primerLibroDrama;
	
	alert(mensaje);
	
}