// Referencias al DOM
const form = document.getElementById('appointmentForm');
const citasLista = document.getElementById('citasLista');

// Cargar citas desde localStorage
const cargarCitas = () => {
  const citas = JSON.parse(localStorage.getItem('citas')) || [];
  citasLista.innerHTML = '';
  citas.forEach((cita, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${cita.nombre}</strong> - ${cita.fecha} a las ${cita.hora}
      <br>
      <button onclick="eliminarCita(${index})">Eliminar</button>
    `;
    citasLista.appendChild(li);
  });
};

// Guardar cita
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nuevaCita = {
    nombre: form.nombre.value,
    fecha: form.fecha.value,
    hora: form.hora.value,
  };

  const citas = JSON.parse(localStorage.getItem('citas')) || [];
  citas.push(nuevaCita);
  localStorage.setItem('citas', JSON.stringify(citas));
  form.reset();
  cargarCitas();
  alert('Cita guardada con éxito');
});

// Eliminar cita
const eliminarCita = (index) => {
  const citas = JSON.parse(localStorage.getItem('citas')) || [];
  citas.splice(index, 1);
  localStorage.setItem('citas', JSON.stringify(citas));
  cargarCitas();
};

// Inicializar lista de citas
cargarCitas();