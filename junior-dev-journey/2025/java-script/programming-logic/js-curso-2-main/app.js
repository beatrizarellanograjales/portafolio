let titulo = document.querySelector('h1');
titulo.innerHTML = '"Hora del Desafío"';

function consolaMensaje () {
    alert("El botón fue clicado");
    }

function mostrarCiudad() {
    let ciudad = prompt("Nombre de una ciudad de Brasil:");
    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acordé de ti`);
        }   

}

