/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let preguntar= "y";
  let mensaje;
  let tipoBolsa;
  let cantidadBolsas;
  let precioBolsa;
  while(preguntar == "y")
  {
    tipoBolsa = prompt("Ingrese el tipo de producto: arena, cal o cemento").toLowerCase();
    while(tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento")
    {
      tipoBolsa = prompt("ERROR: cal arena o cemento").toLowerCase();
    }
    cantidadBolsas = prompt("Ingrese cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas)== true)
    {
      cantidadBolsas = prompt("ERROR");
      cantidadBolsas = parseInt(cantidadBolsas);
    }
    precioBolsa = prompt("Ingrese precio de bolsa");
    precioBolsa = parseFloat(precioBolsa);
    while(isNaN(precioBolsa)== true)
    {
      precioBolsa = prompt("ERROR");
      precioBolsa = parseFloat(precioBolsa);
    }
    //a) El importe total a pagar , bruto sin descuento y...
    acumuladorImporte += precioBolsa;
    //fin while
    preguntar = prompt("Quieres agregar otro? y/n");
  }
  
}
