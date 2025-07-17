# Vidasalu-C.O
pagina de salud
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="contenedor">
        <div class="formulario">
            <h1>👋 ¡Bienvenido!</h1>
            <input type="email" id="email" placeholder="Email">
            <input type="password" id="password" placeholder="Contraseña">
            <button onclick="registrarUsuario()">Registrarse</button>
            <button onclick="iniciarSesion()">Iniciar Sesión</button>
        </div>
    </div>
    <script src="scripts/firebase.js"></script>
    <script src="scripts/auth.js"></script>
</body>
</html>
