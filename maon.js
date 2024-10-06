document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, complete todos los campos.";
    } else {
        errorMessage.textContent = "";
        // Aquí puedes agregar la lógica para autenticar al usuario
        alert("Inicio de sesión exitoso");
    }
});
