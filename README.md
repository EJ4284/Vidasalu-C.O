# Vidasalu-C.O
pagina de salud
app-salud/
├── index.html          # Página de inicio (login/registro)
├── app.html            # Página principal (chatbot + QR)
├── perfil.html         # Formulario médico
├── calendario.html     # Calendario interactivo
├── styles/
│   └── styles.css      # Estilos CSS
├── scripts/
│   ├── firebase.js     # Configuración Firebase
│   ├── auth.js         # Autenticación
│   ├── perfil.js       # Perfil médico
│   ├── voz.js          # Reconocimiento de voz
│   ├── chatbot.js      # Lógica del chatbot
│   ├── calendario.js   # FullCalendar + rutinas
│   └── qr.js           # Generador de QR
├── assets/             # Imágenes/iconos
│   ├── icono.png       # Favicon
│   └── logo.png        # Logo opcional
└── .gitignore          # Ignorar node_modules
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Salud | Login</title>
    <link rel="stylesheet" href="styles/styles.css">
    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-auth-compat.js"></script>
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
