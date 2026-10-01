// Expresiones regulares para validar los datos
const PATRON_NOMBRE = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]{2,40}$/;
const PATRON_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Devuelve un saludo según la hora del día
function obtenerSaludoPorHora() {
  let hora = new Date().getHours();
  if (hora < 12) return "Buenos días";
  if (hora < 19) return "Buenas tardes";
  return "Buenas noches";
}

// Muestra un mensaje con color según su tipo: "ok" o "error"
function mostrarMensaje(idElemento, texto, tipo) {
  let elemento = document.getElementById(idElemento);
  elemento.innerText = texto;
  elemento.className = "mensaje " + tipo;
}

function saludar() {
  let campo = document.getElementById("nombre");
  let nombre = campo.value.trim();

  if (nombre === "") {
    mostrarMensaje("resultado", "Por favor, ingresa tu nombre.", "error");
    campo.focus();
    return;
  }

  if (!PATRON_NOMBRE.test(nombre)) {
    mostrarMensaje("resultado", "El nombre solo puede tener letras y espacios (mínimo 2).", "error");
    campo.focus();
    return;
  }

  mostrarMensaje("resultado", obtenerSaludoPorHora() + ", " + nombre + ". Bienvenido al sistema.", "ok");
  campo.value = "";
}

function validarCorreo() {
  let campo = document.getElementById("correo");
  let correo = campo.value.trim();

  if (correo === "") {
    mostrarMensaje("mensajeCorreo", "Debe ingresar un correo.", "error");
    campo.focus();
    return;
  }

  if (!PATRON_CORREO.test(correo)) {
    mostrarMensaje("mensajeCorreo", "El correo no es válido. Ejemplo: usuario@dominio.com", "error");
    campo.focus();
    return;
  }

  mostrarMensaje("mensajeCorreo", "Correo registrado correctamente: " + correo, "ok");
  campo.value = "";
  campo.classList.remove("invalido");
}

// Permite usar la tecla Enter en lugar de hacer clic en el botón
function activarEnter(idCampo, accion) {
  document.getElementById(idCampo).addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      accion();
    }
  });
}

// Marca el campo de correo en rojo mientras el formato no sea válido
document.getElementById("correo").addEventListener("input", function () {
  let valor = this.value.trim();
  if (valor !== "" && !PATRON_CORREO.test(valor)) {
    this.classList.add("invalido");
  } else {
    this.classList.remove("invalido");
  }
});

activarEnter("nombre", saludar);
activarEnter("correo", validarCorreo);
