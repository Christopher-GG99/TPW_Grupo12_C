document
  .getElementById("clientOptionsForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const cita = document.getElementById("cita").value;
    const problema = document.getElementById("problema").value.trim();
    const historial = document.getElementById("historial").value.trim();
    const retroalimentacion = document
      .getElementById("retroalimentacion")
      .value.trim();
    const credito = document.getElementById("credito").value.trim();
    const estadoCredito = document
      .getElementById("estadoCredito")
      .value.trim();

    if (
      !cita ||
      !problema ||
      !historial ||
      !retroalimentacion ||
      isNaN(credito) ||
      !estadoCredito
    ) {
      showAlert("error");
      return;
    }

    // Añadir los datos a la tabla de resumen
    const tbody = document.getElementById("clientSummaryTable");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${cita}</td>
      <td>${problema}</td>
      <td>${historial}</td>
      <td>${retroalimentacion}</td>
      <td>${parseFloat(credito).toFixed(2)}</td>
      <td>${estadoCredito}</td>
    `;
    tbody.appendChild(tr);

    // Mostrar alerta de éxito y resetear formulario
    showAlert("success");
    this.reset();
  });

function showAlert(type) {
  const alertSuccess = document.getElementById("alertSuccess");
  const alertError = document.getElementById("alertError");

  alertSuccess.style.display = "none";
  alertError.style.display = "none";

  if (type === "success") {
    alertSuccess.style.display = "block";
    setTimeout(() => (alertSuccess.style.display = "none"), 3000);
  } else {
    alertError.style.display = "block";
    setTimeout(() => (alertError.style.display = "none"), 3000);
  }
}
