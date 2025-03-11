//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// La fórmula para calcular el IMC es peso / altura^2.
// como funcionaría si usaramos la consola
/* function calcularIMC()
{
  let peso = 70;
  let altura = 1.75;

  let imc = peso / (altura * altura);
  console.log(imc);
 imc = imc.toFixed(2); // Redondear el resultado a dos decimales
}
  calcularIMC();     */

  // ***A continuación comenzamos realizando el proyecto pero con Alert y Prompt & Algunas otras mejoras ***

// Función principal para calcular el Índice de Masa Corporal (IMC)
function calcularIMC() {
  // Solicitar al usuario su peso en kilogramos mediante un cuadro de entrada
  let peso = prompt("Ingrese su peso en kilogramos (kg):");

  // Convertir el dato ingresado a un número decimal
  peso = parseFloat(peso);

  // Validación: Verificar que el usuario ingresó un número positivo
  //La función isNaN() verifica si el valor proporcionado NO es un número (NaN significa Not a Number).
  //Devuelve true → Si el valor NO es un número.
  //Devuelve false → Si el valor sí es un número.
  if (isNaN(peso) || peso <= 0) {
      alert("Por favor, ingrese un peso válido.");
      return; // Termina la ejecución de la función si el dato es inválido
  }

  // Solicitar al usuario su altura en metros mediante un cuadro de entrada
  let altura = prompt("Ingrese su altura en metros (ejemplo: 1.85):");

  // Convertir el dato ingresado y almacenado en la variable altura a un número decimal
  //parseFloat() es una función nativa de JavaScript que convierte una cadena de texto en un número decimal (float).
  altura = parseFloat(altura);

  // Validación: Verificar que el usuario ingresó un número positivo
  if (isNaN(altura) || altura <= 0) {
      alert("Por favor, ingrese una altura válida.");
      return; // Termina la ejecución de la función si el dato es inválido
  }

  // Calcular el IMC usando la fórmula: IMC = peso / (altura al cuadrado)
  let imc = peso / (altura * altura);

  // Redondear el resultado a dos decimales para mayor claridad
  imc = imc.toFixed(2);

  // Inicializar una variable para almacenar la clasificación del IMC
  let clasificacionIMC = "";

  // Clasificar el resultado del IMC según las categorías establecidas por la OMS
  if (imc < 18.5) {
    clasificacionIMC = "Bajo peso";
  // && es un operador lógico que se utiliza para combinar dos condiciones.
  // && Devuelve true si ambas condiciones son verdaderas.
  // && Devuelve false si al menos una de las condiciones es falsa.   
} else if (imc >= 18.5 && imc <= 24.9) {
    clasificacionIMC = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
    clasificacionIMC = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.9) {
    clasificacionIMC = "Obesidad grado I (leve)";
} else if (imc >= 35 && imc <= 39.9) {
    clasificacionIMC = "Obesidad grado II (moderada)";
} else {
    clasificacionIMC = "Obesidad grado III (grave)";
}

// Mostrar al usuario el resultado del IMC y su clasificación en un cuadro de alerta
alert(`Tu IMC es: ${imc}\nClasificación: ${clasificacionIMC}`); // Opción más moderna y legible

}