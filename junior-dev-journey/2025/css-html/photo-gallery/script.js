
/* instrución de quitar el filtro greyScale al hacer click en la imagen */

/* document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.contenedor__imagenes__div');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            this.style.filter = 'grayscale(0%)';
        });
    });
}); */

/* document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.contenedor__imagenes__div');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            // Restablecer el filtro de escala de grises en todas las imágenes
            imagenes.forEach(img => {
                img.style.filter = 'grayscale(100%)';
            });
            // Aplicar el filtro de color solo a la imagen seleccionada
            this.style.filter = 'grayscale(0%)';
        });
    });
}); */


document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.contenedor__imagenes__div');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            // Restablecer el filtro en todas las imágenes
            imagenes.forEach(img => img.style.filter = 'grayscale(100%)');

            // Aplicar color solo a la imagen seleccionada
            imagen.style.filter = 'grayscale(0%)';
        });
    });
});