/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	//pido espacio de memoria
	let i = 1;
	// si 1 es menor a 10, se va a sumar 1 (i++)
	while(i <= 10){
		alert(i);
		i ++;
	}
}

/*
SENTENCIAS SECUENCIALES

Las sentencias secuenciales son aquellas que se ejecutan en orden, una detrás de otra. Es decir, se ejecutan de manera secuencial, de la primera a la última.

SENTENCIAS CONDICIONALES (TRUE OR FALSE)

Las sentencias condicionales son aquellas que se ejecutan solo si se cumple cierta condición. Por ejemplo, una sentencia "if" (si) permite ejecutar un bloque de código solo si se cumple una determinada condición.

INSTRUCCIONES ITERATIVAS  O REPETITIVAS (BUCLE)

Las sentencias iterativas, también conocidas como bucles o ciclos, permiten ejecutar un bloque de código varias veces de manera consecutiva. Por ejemplo, un bucle "for" (para) permite ejecutar un bloque de código un número determinado de veces.

RESUMEN
las sentencias secuenciales son aquellas que se ejecutan en orden una detrás de otra, las sentencias condicionales son aquellas que se ejecutan solo si se cumple una condición, y las sentencias iterativas son aquellas que permiten ejecutar un bloque de código varias veces de manera consecutiva.

estructura de if

if(condicion 1)
{
	instrucciones/sentencias 1
}
if else (condicion 2)
{
	instrucciones/sentencias 2
}
else 
{
	resto : instrucciones/sentencias 
}

estructura switch

swith (variable)
{
	case valor:
		instrucciones/sentencias 1
		break; 
}

estructura while  

la diferencia entre if y while es que While vuelve a evaluar la condicion, osea vuelve para atras, en cambio el if no vuelve para atras sino que continua leyendo las instrucciones

while(condicion) 
{
	instrucciones/sentencias
}

*/