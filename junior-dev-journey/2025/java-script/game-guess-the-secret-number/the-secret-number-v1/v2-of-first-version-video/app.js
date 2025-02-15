//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';  /** se puede presindir de esta parte dle codigo ya que  usamos mas abajo asignarTextoElemento('p', 'Indica un número del 1 al 10'); */

let numeroSecreto = generarNumeroSecreto(); // esto lo haces para que no necesites crear una variable que se llame numero secreto y unicamente poner return
//console.log(numeroSecreto); // esto es opcional y lo hacemo para saber que lo que esta arriba esta fucnionando correctamente.



function asignarTextoElemento(elemento, texto) { //son parametros que se crean que recive esa función 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;  // para buenas practicas es imporatnte poner al final el return al final de una funci
}

function verificarIntento() {
    //alert('Click desde el botón'); envez de esto usamos otra cosa para acpturar lo que el usuario puso
   //let numeroDeUsuario = document.querySelector('input').value; //captura el valor que el usuario puso en el input (la etiqueta -- esta representa la cajita blanca en el codigo html) 
   // puedo seguir utilizando la función de QuerySelector para capturar el valor del input pero en JS existen otras formas de hacerlo mas especificos. 
   // sustituimos  document.querySelector por .getElementById
   // Recordamos que valorUsuario es el id que le pusimos al input en el html y e spor eso que no usamos input
   //let numeroDeUsuario = document.getElementById('valorUsuario').value;
   // poniendole parentesis hacemos  que todo lo que esta en el parentesis se conbierta en el parametro de la funci[on parseInt]
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(typeof(numeroDeUsuario))
   console.log(numeroSecreto); 
   console.log (typeof(numeroSecreto));
   console.log(numeroDeUsuario); // esto es opcional y lo hacemo para saber que lo que esta arriba esta fucnionando correctamente.
   //console.log (numeroDeUsuario == numeroSecreto); // llamamos a la función para validar una condición y nos regresa un tipo de dato buleano
   // no podriamos usar el triple igual si no hubieramos usado la función parseInt antes 
   console.log (numeroDeUsuario === numeroSecreto); 
   return; // lo que me regresa será un valor buleano TRUE o FALSE
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

