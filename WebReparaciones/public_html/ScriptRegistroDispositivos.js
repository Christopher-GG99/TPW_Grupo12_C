// Elementos del DOM
const tipoDispositivo = document.getElementById("tipoDispositivo");
const marca = document.getElementById("marca");
const problema = document.getElementById("problema");
const registroForm = document.getElementById("registroForm");
const tablaDispositivos = document.getElementById("tablaDispositivos").querySelector("tbody");

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
  marca.innerHTML = "";
  problema.innerHTML = "";

  opciones[tipo].marcas.forEach((opcion) => {
    const opt = document.createElement("option");
    opt.value = opcion.toLowerCase();
    opt.textContent = opcion;
    marca.appendChild(opt);
  });

  opciones[tipo].problemas.forEach((opcion) => {
    const opt = document.createElement("option");
    opt.value = opcion.toLowerCase().replace(/\s+/g, "-");
    opt.textContent = opcion;
    problema.appendChild(opt);
  });
}

// Generar código único de registro
function generarCodigo() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let codigo = "";
  for (let i = 0; i < 8; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres[indice];
  }
  return codigo;
}

// Inicializar con "Móvil" seleccionado por defecto
cargarOpciones("movil");

// Cambiar opciones al seleccionar un tipo de dispositivo
tipoDispositivo.addEventListener("change", (e) => {
  cargarOpciones(e.target.value);
});

// Manejar el evento de envío del formulario
registroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Crear un objeto con los datos del formulario
  const nuevoRegistro = {
    tipoDispositivo: tipoDispositivo.options[tipoDispositivo.selectedIndex].text,
    marca: marca.options[marca.selectedIndex].text,
    problema: problema.options[problema.selectedIndex].text,
    codigo: generarCodigo(),
  };

  // Crear una nueva fila para la tabla
  const nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `
    <td>${nuevoRegistro.tipoDispositivo}</td>
    <td>${nuevoRegistro.marca}</td>
    <td>${nuevoRegistro.problema}</td>
    <td>${nuevoRegistro.codigo}</td>
  `;

  // Agregar la fila a la tabla
  tablaDispositivos.appendChild(nuevaFila);

  // Limpiar el formulario y restablecer las opciones predeterminadas
  registroForm.reset();
  cargarOpciones("movil");
});
