//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';  /** se puede presindir de esta parte dle codigo ya que  usamos mas abajo asignarTextoElemento('p', 'Indica un número del 1 al 10'); */

function asignarTextoElemento(elemento, texto) { //son parametros que se crean que recive esa función 
    let elementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
}

function intentoDeUsuario() {
    alert('Click desde el botón');
}

// mejor forma d etrabajo mantenible y escalable
asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
