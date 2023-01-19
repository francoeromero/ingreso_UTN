/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	 numSecreto = Math.floor(Math.random() * (3 - 1 + 1)) + 1;//sin let porque es un ambito global
   
}//FIN DE LA FUNCIÓN
function piedra()
{
    if(numSecreto == 1){
        alert(`Usted eligio PIEDRA y su contrincante eligió PIEDRA, empate!`);
    }else if (numSecreto == 2 ){
        alert(`Usted eligio PIEDRA y su contrincante eligió PAPEL, perdiste!`);
    }else {
        alert(`Usted eligio PIEDRA y su contrincante eligió TIJERA, ganaste!!`)
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if(numSecreto == 1){
        alert(`Usted eligio PAPEL y su contrincante eligió PIEDRA, ganaste!`);
    }else if (numSecreto == 2 ){
        alert(`Usted eligio PAPEL y su contrincante eligió PAPEL, empate!`);
    }else {
        alert(`Usted eligio PAPEL y su contrincante eligió TIJERA, perdiste!!`)
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(numSecreto == 1){
        alert(`Usted eligio TIJERA y su contrincante eligió PIEDRA, perdiste!`);
    }else if (numSecreto == 2 ){
        alert(`Usted eligio TIJERA y su contrincante eligió PAPEL, ganaste!`);
    }else {
        alert(`Usted eligio TIJERA y su contrincante eligió TIJERA, empate!!`)
    }

}//FIN DE LA FUNCIÓN