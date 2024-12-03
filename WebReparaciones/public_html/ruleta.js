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

let girosRestantes = 5; // Máximo de giros permitidos

function generarCodigo() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigo = "";
    for (let i = 0; i < 8; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}

document.getElementById("girar").addEventListener("click", function () {
    if (girosRestantes > 0) {
        let premioAleatorio = Math.floor(Math.random() * casillas.length); // Índice del premio
        let vueltasBase = 3; // Número de vueltas completas
        let vueltasTotales = vueltasBase * casillas.length + premioAleatorio; // Total de pasos

        let indiceActual = 0;
        let intervalo = 100; // Velocidad inicial
        let intervaloID = setInterval(() => {
            casillas[indiceActual].classList.remove('seleccionada');
            indiceActual = (indiceActual + 1) % casillas.length;
            casillas[indiceActual].classList.add('seleccionada');
            vueltasTotales--;

            if (vueltasTotales < 10) {
                intervalo += 20;
                clearInterval(intervaloID);
                intervaloID = setInterval(() => {
                    if (vueltasTotales <= 0) {
                        clearInterval(intervaloID);

                        const codigoCanje = generarCodigo();
                        document.getElementById("resultado").innerHTML =
                            `¡Felicidades! Has ganado: ${premios[premioAleatorio]}<br>` +
                            `Código de canje: <span class="codigo" onclick="copiarCodigo('${codigoCanje}')">${codigoCanje}</span>`;

                    } else {
                        casillas[indiceActual].classList.remove('seleccionada');
                        indiceActual = (indiceActual + 1) % casillas.length;
                        casillas[indiceActual].classList.add('seleccionada');
                        vueltasTotales--;
                    }
                }, intervalo);
            }

            if (vueltasTotales <= 0) {
                clearInterval(intervaloID);
            }
        }, intervalo);

        girosRestantes--; // Reducir el contador de giros
        if (girosRestantes === 0) {
            document.getElementById("girar").disabled = true; // Deshabilitar el botón
            document.getElementById("resultado").textContent +=
                "\nHas alcanzado el límite de giros.";
        }
    }
});

// Función para copiar el código al portapapeles
function copiarCodigo(codigo) {
    navigator.clipboard.writeText(codigo).then(() => {
        alert("¡Código copiado al portapapeles!");
    });
}
