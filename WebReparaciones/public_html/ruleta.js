const casillas = Array.from(document.querySelectorAll('.casilla'));
const premios = [
    "Descuento 10%",
    "Tiempo 1/3",
    "Descuento 20%",
    "Descuento 15%",
    "Tiempo 1/2",
    "Descuento 25%",
    "Descuento 5%",
    "Nada",  // si se nos ocurre otro premio lo ponemos aqui
    "Descuento 35%"
];

document.getElementById("girar").addEventListener("click", function() {
    let premioAleatorio = Math.floor(Math.random() * casillas.length);
    let vueltas = 20 + premioAleatorio; // Número de vueltas antes de detenerse

    let indiceActual = 0;
    let intervalo = setInterval(() => {
        // Para quitar el resaltado de la casilla anterior
        casillas[indiceActual].classList.remove('seleccionada');

        // Para avanzar a la siguiente casilla
        indiceActual = (indiceActual + 1) % casillas.length;

        // Para resaltar la nueva casilla
        casillas[indiceActual].classList.add('seleccionada');

        vueltas--;

        //Para Detener la ruleta cuando se completen las vueltas y nos salga el premio
        if (vueltas <= 0) {
            clearInterval(intervalo);
            document.getElementById("resultado").textContent = "¡Felicidades! Has ganado: " + premios[premioAleatorio];
        }
    }, 100); // Cambia de casilla cada 1 seg. para el efecto de transicion
});
