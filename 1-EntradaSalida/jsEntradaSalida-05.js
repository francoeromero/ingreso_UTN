/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//pido espacio de memoria 
	let nombre;
	let edad;
	//asigno los valores de los elemento html a las variables 
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	//concateno las variable con strings para mostrarlos en una alerta
	alert(`Usted se llama ${nombre} \n y su edad es ${edad}`);
	//Limpio las entradas para usarse de nuevo
	document.getElementById("txtIdNombre").value = "";
	document.getElementById("txtIdEdad").value = "";
}



let mensaje;
mensaje = "Usted se llama";
mensaje = mensaje + nombre;
mensaje = " y tiene ";
mensaje = mensaje + edad;
mensaje = mensaje + " años";
/*
APUNTES:
Que es lo que tenemos que lo primero? 
1-Conseguir espacio de memoria osea crear variable
2-Copiar lo que escribio el usuario en los input
3-Pegar los datos y que se muestre en la alerta

// back tik: ´´

otra opcion:

alert("Usted se llama $(nombre) y tiene $(edad) de años");

document = html documento
getelementbyid = nos interesa los ID de los html
("") = especificamente este id
.value = me interesa el valor que escribio en ese campo de entrada 
*/