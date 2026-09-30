const botonRegistro = document.getElementById("registro");
const ventanaRegistro = document.querySelector(".fondo-registro");

botonRegistro.addEventListener("click", function() {
    ventanaRegistro.classList.remove("oculto");
});

const cerrarRegistro = document.getElementById("cerrar-registro");

cerrarRegistro.addEventListener("click", function() {
    ventanaRegistro.classList.add("oculto");
});