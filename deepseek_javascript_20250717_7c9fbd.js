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