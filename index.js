var segundos = 0;
var minutos = 0;
var horas = 0;
var dias = 0;
var decimas = 0;

document.querySelector("h1").innerHTML = "00:00:00:00:00";

const cronometro = () => {
  var seg;
  var min;
  var hour;
  var day;
  var dec;

  decimas++;
  if (decimas > 9) {
    segundos++;
    decimas = 0;
  }
  if (segundos > 59) {
    minutos++;
    segundos = 0;
  }
  if (minutos > 59) {
    horas++;
    minutos = 0;
  }
  if (horas > 24) {
    dias++;
    horas = 0;
  }

  if (segundos < 10) {
    seg = "0" + segundos;
  } else {
    seg = segundos;
  }
  if (minutos < 10) {
    min = "0" + minutos;
  } else {
    min = minutos;
  }
  if (horas < 10) {
    hour = "0" + horas;
  } else {
    hour = horas;
  }
  if (dias < 10) {
    day = "0" + dias;
  } else {
    day = dias;
  }
  if (decimas < 10) {
    dec = "0" + decimas;
  } else {
    dec = decimas;
  }

  document.querySelector("h1").innerHTML =
    day + ":" + hour + ":" + min + ":" + seg + ":" + dec;
  document.getElementById("iniciar").innerHTML = "Iniciar";
};

const iniciar = () => {
  inicio = setInterval(cronometro, 100);
  document.getElementById("iniciar").disabled = true;
  document.getElementById("parar").disabled = false;
  document.getElementById("parar").innerHTML = "Pausar";
};

document.getElementById("iniciar").addEventListener("click", iniciar);

const parar = () => {
  clearInterval(inicio);
  document.getElementById("iniciar").innerHTML = "Continuar";
  document.getElementById("parar").innerHTML = "Pausado";
  document.getElementById("parar").disabled = true;
  document.getElementById("iniciar").disabled = false;
};

document.getElementById("parar").addEventListener("click", parar);

const restaurar = () => {
  document.querySelector("h1").innerHTML = "00:00:00:00:00";
  clearInterval(inicio);
  document.getElementById("iniciar").innerHTML = "Iniciar";
  document.getElementById("parar").innerHTML = "Pausar";
  document.getElementById("iniciar").disabled = false;
  segundos = 0;
  minutos = 0;
  horas = 0;
  dias = 0;
};

document.getElementById("restaurar").addEventListener("click", restaurar);
