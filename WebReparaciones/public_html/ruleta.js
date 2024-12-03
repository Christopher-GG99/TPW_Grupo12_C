const casillas = Array.from(document.querySelectorAll('.casilla'));
const premios = [
    "Descuento 10%",
    "Reduccion de Tiempo 30%",
    "Bolsa de nuestra Marca",
    "Descuento 15%",
    "Reduccion de Tiempo 50%",
    "Una Optimizacion Gratis a tu dispositivo",
    "Descuento 20%",
    "Reduccion de Tiempo 25%",
    "Fondo de Pantalla animado de la marca"
];

document.getElementById("girar").addEventListener("click", function () {
    let premioAleatorio = Math.floor(Math.random() * casillas.length); // Índice del premio
    let vueltasBase = 3; // Número de vueltas completas
    let vueltasTotales = vueltasBase * casillas.length + premioAleatorio; // Total de pasos

    let indiceActual = 0;
    let intervalo = 100; // Velocidad inicial
    let intervaloID = setInterval(() => {
        // Quitar resaltado de la casilla actual
        casillas[indiceActual].classList.remove('seleccionada');

        // Avanzar a la siguiente casilla
        indiceActual = (indiceActual + 1) % casillas.length;

        // Resaltar la nueva casilla
        casillas[indiceActual].classList.add('seleccionada');

        vueltasTotales--;

        // Reducir gradualmente la velocidad para un efecto de frenado
        if (vueltasTotales < 10) {
            intervalo += 20; // Incrementar intervalo para reducir la velocidad
            clearInterval(intervaloID); // Detener el intervalo actual
            intervaloID = setInterval(() => {
                if (vueltasTotales <= 0) {
                    clearInterval(intervaloID);
                    document.getElementById("resultado").textContent =
                        "¡Felicidades! Has ganado: " + premios[premioAleatorio];
                } else {
                    casillas[indiceActual].classList.remove('seleccionada');
                    indiceActual = (indiceActual + 1) % casillas.length;
                    casillas[indiceActual].classList.add('seleccionada');
                    vueltasTotales--;
                }
            }, intervalo);
        }

        // Detenerse cuando las vueltas se completen
        if (vueltasTotales <= 0) {
            clearInterval(intervaloID);
            document.getElementById("resultado").textContent =
                "¡Felicidades! Has ganado: " + premios[premioAleatorio];
        }
    }, intervalo);
});
