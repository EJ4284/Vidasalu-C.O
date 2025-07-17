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
// Textos en diferentes idiomas (ahora incluye los nuevos elementos)
const textos = {
    es: {
        titulo: "📱 InfoSalud",
        buscarPlaceholder: "Buscar alimentos...",
        tituloAlimentacion: "🍎 Alimentación",
        textoAlimentacion: "Consejos y guías nutricionales.",
        tituloEjercicio: "💪 Ejercicio",
        textoEjercicio: "Rutinas y planes de entrenamiento.",
        derechos: "© 2024 - Dibujado a mano ✏️"
    },
    en: {
        titulo: "📱 HealthInfo",
        buscarPlaceholder: "Search foods...",
        tituloAlimentacion: "🍎 Nutrition",
        textoAlimentacion: "Tips and dietary guides.",
        tituloEjercicio: "💪 Exercise",
        textoEjercicio: "Workout routines and plans.",
        derechos: "© 2024 - Hand-drawn ✏️"
    },
    // ... (agrega las traducciones para otros idiomas)
};

function cambiarIdioma() {
    const idioma = document.getElementById("idioma").value;
    const t = textos[idioma];
    
    // Actualiza todos los textos
    document.getElementById("titulo").textContent = t.titulo;
    document.getElementById("buscar-alimento").placeholder = t.buscarPlaceholder;
    document.getElementById("titulo-alimentacion").textContent = t.tituloAlimentacion;
    document.getElementById("texto-alimentacion").textContent = t.textoAlimentacion;
    document.getElementById("titulo-ejercicio").textContent = t.tituloEjercicio;
    document.getElementById("texto-ejercicio").textContent = t.textoEjercicio;
    document.getElementById("derechos").textContent = t.derechos;
}

function buscarAlimento() {
    const alimento = document.getElementById("buscar-alimento").value;
    alert(`Buscando: ${alimento}`); // Puedes reemplazar esto con una búsqueda real
}

function mostrarAlimentacion() {
    alert("Mostrando sección de Alimentación"); // Ejemplo: redirigir a otra página
}

function mostrarEjercicio() {
    alert("Mostrando sección de Ejercicio");
}
