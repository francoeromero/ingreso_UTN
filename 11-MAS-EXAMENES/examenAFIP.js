/* Ejercicio 3: Apellido: Nombre: Comisión: Tutor: "Atención AFIP: ""Inspección de Bultos"": La administración federal de ingresos públicos tiene el ojo puesto sobre una empresa de logística que opera en Argentina e importa productos desde México, Colombia y Uruguay. Nos piden que realicemos un programa que permita controlar los movimientos de dicha empresa: De cada pedido que recibe la empresa se conoce:

la cantidad de bultos,
el peso por bulto (no debe superar los 1500 kilos),
el lugar de origen. (México, Colombia y Uruguay)

Se establece que la tarifa regular por bulto es de $300 y la tarifa especial (para pedidos de más de 300 kilos por bulto) es de $500. 


La aplicación debe informar a la AFIP: 


A) Total facturado 

B) Porcentaje de bultos ingresados desde Colombia. 

C) Sobre el total facturado de bultos provenientes de México, la empresa deberá pagar un canon del 15% sobre este total (este impuesto luego será redistribuido para la construcción de hospitales). Mostrar dicho valor. 

D) Para incentivar el libre comercio con los países del MERCOSUR, si el total facturado de bultos provenientes de Uruguay, supera los $15000000, se le otorgará a la empresa una devolución del 5% sobre ese total. */



function comenzar()
{   z
    let continua;
	let mensaje;
    let precio;
    let cantidadBultos;
    let pesoBulto;
    let acumuladorFacturado=0;
    let acumuladorBultosColombia=0;
    let acumuladorGeneralBultos=0;
    let porcentajeBultosColombia;
    let importeTotal;
    let acumuladorFacturadoMexico=0;
    let impuestoMexico;
    let totalMexico;
	
	do
	{
        do
        {
            cantidadBultos = prompt("Ingrese cantidadBultos");
            cantidadBultos = parseInt(cantidadBultos);
        }while(isNaN(cantidadBultos) || cantidadBultos < 0);
        do
        {
            pesoBulto = prompt("Ingrese pesoBulto");
            pesoBulto = parseFloat(pesoBulto);
        }while(isNaN(pesoBulto) || pesoBulto < 1 || pesoBulto > 1500);
        let lugarOrigen;
        do
        {
            lugarOrigen = prompt("Ingrese lugarOrigen  (México, Colombia y Uruguay)");
            lugarOrigen = lugarOrigen.toLowerCase();
        }while(lugarOrigen != "mexico" && lugarOrigen != "colombia" && lugarOrigen != "uruguay");
        //A
        if(pesoBulto >300)
        {
            precio=500;
        }
        else
        {
            precio=300;
        }
        //b
        if(lugarOrigen=="colombia")
        {
            acumuladorBultosColombia+=cantidadBultos;
        }
        else
        {
            if(lugarOrigen=="mexico")
            {
                acumuladorFacturadoMexico+=cantidadBultos*precio;
            }
        }
        

        acumuladorFacturado+=cantidadBultos*precio;
        acumuladorGeneralBultos+=cantidadBultos;
    
    continua = confirm("Quieres continuar?");
}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    //b
    if(acumuladorBultosColombia!=0)
    {
        porcentajeBultosColombia= (acumuladorBultosColombia*100)/acumuladorGeneralBultos;
    }
    else
    {
        porcentajeBultosColombia=0;
    }
    //c
    
    impuestoMexico = acumuladorFacturadoMexico*0.15; // el 15% de todo lo acumulado en mexico
    totalMexico = acumuladorFacturadoMexico + impuestoMexico; // total con el 15%
    //d
    if(importeTotal>150000000)
    {
        importeTotal=importeTotal*0.95;
    }
	//muestro
	// mensaje = "\n A- " + acumuladorFacturado;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	alert(mensaje);
}