const tipoDispositivo = document.getElementById("tipoDispositivo");
const marca = document.getElementById("marca");
const problema = document.getElementById("problema");

// Opciones por tipo de dispositivo
const opciones = {
  movil: {
    marcas: ["Samsung", "Xiaomi", "Huawei", "Motorola", "OnePlus", "Nokia", "LG"],
    problemas: [
      "Pantalla rota",
      "Batería dañada",
      "Altavoces rotos",
      "Botones fallan",
      "No carga",
      "Micrófono no funciona",
      "No detecta SIM",
    ],
  },
  laptop: {
    marcas: ["HP", "Dell", "Lenovo", "Acer", "Asus", "MSI", "Toshiba"],
    problemas: [
      "Pantalla dañada",
      "Batería no carga",
      "Teclado defectuoso",
      "Sobrecalentamiento",
      "Puertos USB dañados",
      "WiFi no conecta",
      "Placa madre defectuosa",
    ],
  },
  pc: {
    marcas: ["Gamer", "Básica de hogar", "De oficina"],
    problemas: [
      "Tarjeta madre defectuosa",
      "Problemas con memoria RAM",
      "Disco duro no detectado",
      "SSD fallando",
      "Puerto USB dañado",
      "Fuente de poder defectuosa",
      "Tarjeta gráfica no funciona",
      "Problemas de ventilación",
      "Monitor no detecta señal",
      "Reinicio inesperado",
    ],
  },
};

// Función para cargar opciones según el dispositivo seleccionado
function cargarOpciones(tipo) {
  // Limpiar las opciones actuales
  marca.innerHTML = "";
  problema.innerHTML = "";

  // Agregar marcas/tipos
  opciones[tipo].marcas.forEach((opcion) => {
    const opt = document.createElement("option");
    opt.value = opcion.toLowerCase();
    opt.textContent = opcion;
    marca.appendChild(opt);
  });

  // Agregar problemas
  opciones[tipo].problemas.forEach((opcion) => {
    const opt = document.createElement("option");
    opt.value = opcion.toLowerCase().replace(/\s+/g, "-");
    opt.textContent = opcion;
    problema.appendChild(opt);
  });
}

// Inicializar con "Móvil" seleccionado por defecto
cargarOpciones("movil");

// Cambiar opciones al seleccionar un tipo de dispositivo
tipoDispositivo.addEventListener("change", (e) => {
  cargarOpciones(e.target.value);
});
