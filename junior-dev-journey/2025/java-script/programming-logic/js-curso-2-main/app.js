let titulo = document.querySelector('h1');
titulo.innerHTML = '"Hora del Desafío"';

//function consolaMensaje() {   //  console.log es util para la depuración de código y el resultado solo se puede visualizar en la consola de desarrollador
    //console.log("El botón fue clicado");
    //}

function consolaMensaje() {    // Alert muestra una mensaje en una ventana emergente y el usuario nomal puede ver el mensaje
    alert("El botón fue clicado");
    }

//function mostrarCiudad() {   //** Define la función
    //let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");  //* instrución en texto al usuario
       // let ciudad guarda  lo que el usuario escribió en la ventana emergente (ciudad)
    //alert("Estuve en " + ciudad + " y me acordé de ti.");  //* En la ventana emergente se mostrará  una concatenación (+) combinando texto + el valor guardado en la variable ciudad 
    //}    

function mostrarCiudad() {  // mostrarCiudad es el nombre de la función. Cuando llamamos a esta función, se ejecutará todo el código dentro de { ... }
    let ciudad = prompt("Nombre de una ciudad de Brasil:"); //prompt() es una función en JavaScript que muestra una ventana emergente
    if (ciudad) {  // sirve para agregra la condición que tiene que cumplirse
        alert(`Estuve en ${ciudad} y me acordé de ti`); // se usan comillas invertidas por que necesito interpolar la variable ciudad
        }   
    }

function yoAmoJs() {
    alert("¡Amo JavaScript!");
    }

//function sumaNumeros() {
    //let numero1 = prompt("Escribe un número:");
    //let numero2 = prompt("Escribe otro número:");
    //let resultado = Number(numero1) + Number(numero2); // no extrae ningun numero si existe un error o combinación
    //alert(`La suma de los números es ${resultado}`);
    //}

//function sumaDosNumeros(){ // parseInt() convierte específicamente a números enteros vualqueir valor en decimal
    //let primerNumero = parseInt(prompt('Digite el primer numero'));
    //let segunNumero = parseInt(prompt('Digite el segundo numero'));
    //let resultado = primerNumero + segunNumero;
    //alert('${primerNumero} + ${segunNumero} = ${resultado}')
}    

function sumarNumeros() {  // parseFloat() convierte específicamente a números decimales.
    let numero1 = parseFloat(prompt("Introduce el primer número:"));
    let numero2 = parseFloat(prompt("Introduce el segundo número:"));
    let suma = numero1 + numero2;
    alert(`La suma de ${numero1} y ${numero2} es ${suma}`);
    }
       




