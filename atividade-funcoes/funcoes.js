// ==========================================
// PARTE 1 - FUNÇÕES ANTERIORES
// ==========================================

// 1. Calcular IMC com validação e classificação
function calcularIMC(peso, altura) {
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        return "Valores inválidos";
    }
    const imc = Number((peso / (altura * altura)).toFixed(2));
    let classificacao = "Obesidade";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";

    return { imc, classificacao };
}

// 2. Calcular conta e devolver valor formatado
function calcularConta(consumo, tarifa) {
    const total = consumo * tarifa;
    return total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// 3. Contar quantidade de valores pares
function contarPares(numeros) {
    return numeros.filter(num => num % 2 === 0).length;
}

// 4. Cadastrar aluno e retornar objeto com média
function cadastrarAluno(nome, curso, notas) {
    const media = notas.length ? notas.reduce((acc, n) => acc + n, 0) / notas.length : 0;
    return {
        nome,
        curso,
        notas,
        media: Number(media.toFixed(2))
    };
}

// 5. Calcular dois números recebendo a operação por parâmetro
function calcularOperacao(n1, n2, operacao) {
    switch (operacao) {
        case "+":
        case "soma":
            return n1 + n2;
        case "-":
        case "subtracao":
            return n1 - n2;
        case "*":
        case "multiplicacao":
            return n1 * n2;
        case "/":
        case "divisao":
            return n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero";
        default:
            return "Operação inválida";
    }
}

// ==========================================
// PARTE 2 - NOVAS FUNÇÕES
// ==========================================

// 1. Função sem parâmetros que mostra o nome no console
function mostrarNome() {
    const nome = "Heitor";
    console.log(nome);
    return nome;
}

// 2. Função receberNome(nome) que mostra uma saudação
function receberNome(nome) {
    const saudacao = `Olá, ${nome}! Seja bem-vindo(a).`;
    console.log(saudacao);
    return saudacao;
}

// 3. Calcular área do retângulo (base * altura)
function calcularArea(base, altura) {
    return base * altura;
}

// 4. Verificar aprovação pela média (>= 7 aprovado)
function verificarAprovacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
}

// 5. Converter Fahrenheit para Celsius
function converterCelsius(fahrenheit) {
    return Number(((fahrenheit - 32) * 5 / 9).toFixed(2));
}

// 6. Função que recebe uma cor como argumento e altera o elemento na tela
function mudarCor(cor) {
    const elemento = document.getElementById("caixa-cor");
    if (elemento) {
        elemento.style.backgroundColor = cor;
        elemento.textContent = "Cor aplicada: " + cor;
    }
    console.log("Cor enviada:", cor);
}

// --- Funções auxiliares para teste na página HTML (Parte 1) ---

function testarIMC() {
    const peso = Number(document.getElementById("imc-peso").value);
    const altura = Number(document.getElementById("imc-altura").value);
    const resultado = calcularIMC(peso, altura);
    document.getElementById("resultado-imc").textContent = 
        typeof resultado === "object" ? `IMC: ${resultado.imc} (${resultado.classificacao})` : resultado;
}

function testarConta() {
    const consumo = Number(document.getElementById("conta-consumo").value);
    const tarifa = Number(document.getElementById("conta-tarifa").value);
    const resultado = calcularConta(consumo, tarifa);
    document.getElementById("resultado-conta").textContent = "Total: " + resultado;
}

function testarPares() {
    const texto = document.getElementById("pares-numeros").value;
    const numeros = texto.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n) && n !== "");
    const resultado = contarPares(numeros);
    document.getElementById("resultado-pares").textContent = "Quantidade de pares: " + resultado;
}

function testarAluno() {
    const nome = document.getElementById("aluno-nome").value;
    const curso = document.getElementById("aluno-curso").value;
    const textoNotas = document.getElementById("aluno-notas").value;
    const notas = textoNotas.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n) && n !== "");
    const aluno = cadastrarAluno(nome, curso, notas);
    document.getElementById("resultado-aluno").textContent = JSON.stringify(aluno, null, 2);
}

function testarCalculadora() {
    const n1 = Number(document.getElementById("calc-n1").value);
    const n2 = Number(document.getElementById("calc-n2").value);
    const op = document.getElementById("calc-op").value;
    const resultado = calcularOperacao(n1, n2, op);
    document.getElementById("resultado-calc").textContent = "Resultado: " + resultado;
}

// Exportação para Node.js (se executado fora do navegador)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        calcularIMC,
        calcularConta,
        contarPares,
        cadastrarAluno,
        calcularOperacao,
        mostrarNome,
        receberNome,
        calcularArea,
        verificarAprovacao,
        converterCelsius,
        mudarCor
    };
}