let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

// Funcion para generar un numero random que sera la eleccion de la maquina
const comenzar = () => {
  eleccionMaquina = Math.floor(Math.random() * 3);
}

// Funcion para cuando se elige piedra
const piedra = () => {
  if (eleccionMaquina === 0) {
    ContadorDeEmpates++; // aumenta el contador de empates
    alert("Empate!");
  }
  else if (eleccionMaquina === 1) {
    ContadorDePerdidas++;// aumenta en perdidas
    alert("Perdiste!");
  }
  else {
    ContadorDeGanadas++;//aumenta en ganadas
    alert("Ganaste!");
  }
  actualizarContadores();// llamo a la funcion que deposita los valores a las entradas
}

const papel = () => {
  if (eleccionMaquina === 0) {
    ContadorDeGanadas++;
    alert("Ganaste!");
  }
  else if (eleccionMaquina === 1) {
    ContadorDeEmpates++;
    alert("Empate!");
  }
  else {
    ContadorDePerdidas++;
    alert("Perdiste!");
  }
  actualizarContadores();
}

const tijera = () => {
  if (eleccionMaquina === 0) {
    ContadorDePerdidas++;
    alert("Perdiste!");
  }
  else if (eleccionMaquina === 1) {
    ContadorDeGanadas++;
    alert("Ganaste!");
  }
  else {
    ContadorDeEmpates++;
    alert("Empate!");
  }
  actualizarContadores();
}

const actualizarContadores = () => {
  document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
  document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
  document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
}