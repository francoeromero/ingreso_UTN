function mostrar()
{


	let estacion = document.getElementById("txtIdEstacion").value; 
	let destino = document.getElementById("txtIdDestino").value;


	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break;

		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas"){
				alert("Se viaja")
			}
			else {
				alert ("No se viaja");
			}
			break;

		case "Otoño":
			alert("Se viaja en todos los destinos");
			break;
		
		case "Primavera":
			if (destino != "Bariloche"){
				alert("Se viaja");
			}
			else{
				alert("NO se viaja");
			}
			break
	}
	
}


/*
Otra solucion: 

let flag = 0;

flag = 1  ---> se viaja
flag = 0 ----> no se viaja

reemplazamos el alert ("se viaja")  por flag = 1;
reemplazamos el alert ("no se viaja") por flag = 0;

y en el final  ponemos

if (flag == 1){
	alert("Se viaja");
}
else {
	alert ("No se viaja")
}



*/