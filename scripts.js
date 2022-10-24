//Juego de Piedra Papel y Tijera 

/* ---------- Definicion de Constantes y Variables ---------- */

const cantidad = document.getElementById("cantidad");

const partida = document.getElementById("botonPartidas");

const contFinal = document.getElementById("contadorFinal");

const contInicial = document.getElementById("contadorInicial");

const opcion = document.getElementById("opcion");

const jugar = document.getElementById("botonJugar");

const piedraMaq = document.getElementById("piedraMaquina");

const papelMaq = document.getElementById("papelMaquina");

const tijeraMaq =document.getElementById("tijeraMaquina");

const piedraUser = document.getElementById("piedraUsuario");

const papelUser = document.getElementById("papelUsuario");

const tijeraUser =document.getElementById("tijeraUsuario")

const result = document.getElementById("resultado");

var tiempo = 2000;

var suma = 0;

var max = 3;

var colorMaq = "lightgreen";

var colorUser = "lightblue";

var fondo = "white";

/* ---------- Eventos ---------- */

partida.addEventListener("click",cantidadPartidas);

jugar.addEventListener("click",opcionUsuario);

jugar.addEventListener("click",sumador);

/* ---------- cantidad de Partidas ---------- */

function cantidadPartidas() {
var valor = cantidad.value;
  if (valor != 0){
    for (i = 0; i <= valor; i++) {
      contFinal.innerHTML = i;
    }
  } else {
    console.log("no hay valor");
  }
}

/* ---------- Partidas Jugadas  ---------- */

function sumador(fin) {
  suma = suma + 1;
  contInicial.innerHTML = suma;
  var inicio = contInicial.innerText;
  var final = contFinal.innerText;
  terminar(inicio,final);
}

/* ---------- Partida de la Maquina ---------- */

function maquina(usuario) {  
  var computadora = Math.floor(Math.random() * max + 1); 
  switch (computadora) {
    case 1:
      piedraMaq.style.backgroundColor = colorMaq;
    break;
    case 2:
      papelMaq.style.backgroundColor = colorMaq;
    break;
    case 3:
      tijeraMaq.style.backgroundColor = colorMaq;
    break;
    default:
      console.log('Opcion Incorrecta');
  }
  ganador(usuario,computadora);
} 

/* ---------- Partida del Usuario ---------- */

function opcionUsuario() {
  var valor = opcion.value;
  switch (valor) {
    case '1':
      piedraUser.style.backgroundColor = colorUser;
    break;
    case '2':
      papelUser.style.backgroundColor = colorUser;
    break;
    case '3':
      tijeraUser.style.backgroundColor = colorUser;
    break;
    default:
      console.log('Opcion Incorrecta');
  }
  maquina(valor);
  limpiar();
}

/* ---------- Ganador de la Partida ---------- */
  
function ganador(usuario , maquina) {
  if (usuario == 1 && maquina == 2) {
    result.innerHTML = "PERDISTES";
  } else if (usuario == 1 && maquina == 3) {
    result.innerHTML = "PERDISTES";
  } else if (usuario == 2 && maquina == 3) {
    result.innerHTML = "PERDISTES";
  } else if (usuario == 2 && maquina == 1) {
    result.innerHTML = "GANASTES";
  } else if (usuario == 3 && maquina == 2) {
    result.innerHTML = "GANASTES";
  } else if (usuario == 3 && maquina == 1) {
    result.innerHTML = "GANASTES";
  } else {
    result.innerHTML = "EMPATARON";
  }
  setInterval(borrarFondo, tiempo);
}

/* ---------- Ganador de la Partida ---------- */
  
function borrarFondo() {
  piedraUser.style.backgroundColor = fondo;
  papelUser.style.backgroundColor = fondo;
  tijeraUser.style.backgroundColor = fondo;
  piedraMaq.style.backgroundColor = fondo;
  papelMaq.style.backgroundColor = fondo;
  tijeraMaq.style.backgroundColor = fondo;
}

/* ---------- Limpiar Campos ---------- */

function limpiar() {
  opcion.value = "";
  cantidad.value = "";
}

/* ---------- Terminar partida ---------- */

function terminar(inicio,fin) {
  if (inicio == fin) {
    location.reload();
  }
}