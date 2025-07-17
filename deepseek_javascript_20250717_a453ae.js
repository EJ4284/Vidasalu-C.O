// Guardar IMC en el perfil del usuario
export async function guardarIMC(usuarioId, imc) {
    await firebase.firestore().collection('usuarios').doc(usuarioId).update({
        imc: parseFloat(imc),
        ultimoCalculo: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// Ejemplo de uso al calcular
const resultados = calcularIMC(peso, altura);
if (!resultados.error) {
    await guardarIMC(usuario.uid, resultados.imc);
}