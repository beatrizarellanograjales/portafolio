let titulo = document.querySelector('h1'); // Seleccionamos el primer elemento <h1> del documento y lo almacenamos en la variable 'titulo'
titulo.innerHTML = '¡juego del numero secreto!'; // Cambiamos el contenido del elemento <h1> por '¡Hola, mundo!'

//punto 2//
let parrafo = document.querySelector('p'); // Seleccionamos el primer elemento <p> del documento y lo almacenamos en la variable 'parrafo'
parrafo.innerHTML = 'Adivina el número secreto entre 1 y 10'; // Cambiamos el contenido del elemento <p> por 'Adivina el número secreto entre 1 y 100'

//punto 2//  otra forma de hacer lo mismo que arriba
//let parrafo = document.querySelector('texto_parrafo'); // Seleccionamos el primer elemento <p> del documento y lo almacenamos en la variable 'parrafo'
//parrafo.innerHTML = 'Adivina el número secreto entre 1 y 10'; // Cambiamos de la clase

 
function intentoDeUsuario () {
    alert('click desde el botón'); // 
}
