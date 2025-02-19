let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {
        
    } else
        if  (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p',`El número secreto es menor a ${numeroDeUsuario}`);
    } else {
        asignarTextoElemento('p',`El número secreto es mayor a ${numeroDeUsuario}`);
    }
    intentos++;

    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);