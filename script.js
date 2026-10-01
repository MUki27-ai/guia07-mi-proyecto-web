// Devuelve un saludo según la hora del día
function obtenerSaludoPorHora() {
  let hora = new Date().getHours();
  if (hora < 12) return "Buenos días";
  if (hora < 19) return "Buenas tardes";
  return "Buenas noches";
}

function saludar() {
  let campo = document.getElementById("nombre");
  let nombre = campo.value.trim(); // quita espacios al inicio y al final
  let resultado = document.getElementById("resultado");

  if (nombre === "") {
    resultado.innerText = "Por favor, ingresa tu nombre.";
    campo.focus();
    return;
  }

  resultado.innerText = obtenerSaludoPorHora() + ", " + nombre + ". Bienvenido al sistema.";
  campo.value = "";
}

function validarCorreo() {
  let campo = document.getElementById("correo");
  let correo = campo.value.trim();
  let mensaje = document.getElementById("mensajeCorreo");

  if (correo === "") {
    mensaje.innerText = "Debe ingresar un correo.";
    campo.focus();
    return;
  }

  mensaje.innerText = "Correo registrado correctamente.";
  campo.value = "";
}

// Permite usar la tecla Enter en lugar de hacer clic en el botón
function activarEnter(idCampo, accion) {
  document.getElementById(idCampo).addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      accion();
    }
  });
}

activarEnter("nombre", saludar);
activarEnter("correo", validarCorreo);
