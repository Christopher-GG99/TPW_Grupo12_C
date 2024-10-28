function registrar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validación simple del correo y contraseña
    if (email && password) {
        // Guardar los datos temporalmente en un objeto
        const usuario = { correo: email, contraseña: password };
        
        // Simular almacenamiento en el código
        console.log("Usuario registrado:", usuario);
        alert("Registro exitoso!");

        // Limpiar los campos después del registro
        document.getElementById('registroForm').reset();
    } else {
        alert("Por favor, complete ambos campos.");
    }
}