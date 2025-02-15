function verificarNumero() {
    let numero = parseInt(document.getElementById("numeroInput").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerText = "Por favor, ingresa un número válido.";
        return;
    }

    if (numero > 0) {
        resultado.innerText = "El número es positivo.";
    } else if (numero < 0) {
        resultado.innerText = "El número es negativo.";
    } else {
        resultado.innerText = "El número es cero.";
    }
}

