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
// Función principal que calcula IMC y peso ideal
export function calcularIMC(peso, altura) {
    // Validar datos
    if (peso <= 0 || altura <= 0) return { error: "Valores inválidos" };

    // Calcular IMC (peso en kg / altura en metros al cuadrado)
    const alturaMetros = altura / 100;
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(1);

    // Calcular peso ideal (Fórmula de Lorentz)
    const pesoIdealMin = ((altura - 100) - ((altura - 150) / 4)).toFixed(1);
    const pesoIdealMax = ((altura - 100) - ((altura - 150) / 2.5)).toFixed(1);

    // Interpretar IMC
    let categoria;
    if (imc < 18.5) categoria = "Bajo peso";
    else if (imc < 25) categoria = "Peso normal";
    else if (imc < 30) categoria = "Sobrepeso";
    else categoria = "Obesidad";

    return {
        imc,
        categoria,
        pesoIdeal: `${pesoIdealMin}kg - ${pesoIdealMax}kg`,
        grafico: generarGraficoIMC(imc) // Función opcional para gráfico
    };
}

// Función auxiliar para gráfico visual (opcional)
function generarGraficoIMC(imc) {
    const niveles = ["Bajo", "Normal", "Sobrepeso", "Obesidad"];
    const valores = [18.5, 25, 30];
    let posicion = valores.findIndex(val => imc < val);
    if (posicion === -1) posicion = 3;
    
    return niveles.map((nivel, i) => ({
        nivel,
        activo: i === posicion
    }));
}
}

function mostrarAlimentacion() {
    alert("Mostrando sección de Alimentación"); // Ejemplo: redirigir a otra página
}
<div class="calculadora dibujado">
    <h2>📊 Calculadora de Salud</h2>
    <input type="number" id="peso" placeholder="Peso (kg)" step="0.1">
    <input type="number" id="altura" placeholder="Altura (cm)">
    <button onclick="mostrarResultados()">Calcular</button>
    
    <div id="resultados-imc" class="resultados">
        <!-- Resultados dinámicos -->
    </div>
</div>

<script type="module">
    import { calcularIMC } from '../scripts/calculadora.js';
    
    window.mostrarResultados = function() {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        
        const resultados = calcularIMC(peso, altura);
        
        if (resultados.error) {
            alert(resultados.error);
            return;
        }
        
        document.getElementById('resultados-imc').innerHTML = `
            <p><strong>IMC:</strong> ${resultados.imc} (${resultados.categoria})</p>
            <p><strong>Peso ideal:</strong> ${resultados.pesoIdeal}</p>
            <div class="grafico-imc">
                ${resultados.grafico.map(item => `
                    <div class="barra ${item.activo ? 'activo' : ''}">
                        ${item.nivel}
                    </div>
                `).join('')}
            </div>
        `;
    };
</script>
function mostrarEjercicio() {
    alert("Mostrando sección de Ejercicio");
}
