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
// Generar QR automático al cargar la app
document.addEventListener('DOMContentLoaded', () => {
    const url = window.location.href.replace('index.html', 'app.html');
    QRCode.toCanvas(document.getElementById('qr-code'), url, {
        width: 200,
        margin: 2,
        color: { dark: '#4CAF50', light: '#ffffff' }
    });
});
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InfoCelular - Estilo Dibujo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="pagina-dibujo">
        <!-- Selector de idioma (esquina superior derecha) -->
        <div class="selector-idioma dibujado">
            <select id="idioma" onchange="cambiarIdioma()">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="pt">Português</option>
                <option value="ja">日本語</option>
                <option value="zh">中文</option>
            </select>
        </div>

        <header class="dibujado">
            <h1 id="titulo">📱 InfoCelular</h1>
        </header>
        <main class="dibujado">
            <p id="bienvenida">¡Bienvenido a nuestra página de información móvil!</p>
            <p id="contenido">(Aquí irá el contenido principal)</p>
        </main>
        <footer class="dibujado">
            <p id="derechos">© 2024 - Dibujado a mano ✏️</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>
