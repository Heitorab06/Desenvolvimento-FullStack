function dobro(numero) {
    return numero * 2;
}

function executarDobro() {
    const num = Number(document.getElementById("numero").value);
    const resultado = dobro(num);
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
