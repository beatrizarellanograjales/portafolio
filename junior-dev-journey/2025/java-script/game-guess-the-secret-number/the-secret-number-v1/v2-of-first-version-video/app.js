//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';  /** se puede presindir de esta parte dle codigo ya que  usamos mas abajo asignarTextoElemento('p', 'Indica un número del 1 al 10'); */

let numeroSecreto = generarNumeroSecreto(); // esto lo haces para que no necesites crear una variable que se llame numero secreto y unicamente poner return
console.log(numeroSecreto); // esto es opcional y lo hacemo para saber que lo que esta arriba esta fucnionando correctamente.

function asignarTextoElemento(elemento, texto) { //son parametros que se crean que recive esa función 
    let elementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;  // para buenas parcticas es imporatnte poner al final el return al final de una funci
}

function intentoDeUsuario() {
    alert('Click desde el botón');
    return;
}

//función para crear el numero aleatorio 
function generalNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1; //genera un numero aleatorio del 1 al 10
    //Math.random() nunca generará 1, solo valores menores a 1 y al multiplicarlo por 10 salen numeros enteros
    return numeroSecreto; //cuando ejecutemos la función (numero secreto) nos devolverá el numero secreto
}

// mejor forma d etrabajo mantenible y escalable
asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');

