const botonRegistro = document.getElementById("registro");
const ventanaRegistro = document.querySelector(".fondo-registro");

botonRegistro.addEventListener("click", function() {
    ventanaRegistro.classList.remove("oculto");
});