// --- Elementos do DOM: Bloco 1 ---
const input1 = document.getElementById("entrada-1");
const contador1 = document.getElementById("contador-1");
const btnGerar1 = document.getElementById("btn-gerar-1");
const btnLimpar1 = document.getElementById("btn-limpar-1");
const hashDisplay1 = document.getElementById("hash-1");
const btnCopiar1 = document.getElementById("btn-copiar-1");
const msg1 = document.getElementById("msg-1");

// --- Elementos do DOM: Bloco 2 ---
const input2 = document.getElementById("entrada-2");
const contador2 = document.getElementById("contador-2");
const btnGerar2 = document.getElementById("btn-gerar-2");
const btnLimpar2 = document.getElementById("btn-limpar-2");
const hashDisplay2 = document.getElementById("hash-2");
const btnCopiar2 = document.getElementById("btn-copiar-2");
const msg2 = document.getElementById("msg-2");
const statusComparacao = document.getElementById("resultado-comparacao");

/**
 * Etapas 3, 4 e 5: Pipeline Criptográfico do SHA-256
 * 1. Converte texto para Uint8Array (bytes UTF-8) via TextEncoder.
 * 2. Processa bytes com window.crypto.subtle.digest.
 * 3. Converte ArrayBuffer para string hexadecimal de 64 caracteres.
 */
async function calcularSHA256(texto) {
  // Etapa 3: Conversão para bytes
  const encoder = new TextEncoder();
  const dadosBytes = encoder.encode(texto);

  // Etapa 4: Geração assíncrona do resumo criptográfico
  const hashBuffer = await crypto.subtle.digest("SHA-256", dadosBytes);

  // Etapa 5: Conversão dos bytes para formato Hexadecimal
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

/**
 * Utilitário para copiar texto para a área de transferência
 */
async function copiarParaClipboard(texto, statusEl) {
  try {
    await navigator.clipboard.writeText(texto);
    statusEl.textContent = "Hash copiado com sucesso!";
    statusEl.className = "message success";
    setTimeout(() => {
      statusEl.textContent = "";
    }, 2500);
  } catch (err) {
    statusEl.textContent = "Falha ao copiar hash.";
    statusEl.className = "message error";
  }
}

// --- Contadores de Caracteres ---
input1.addEventListener("input", () => {
  contador1.textContent = `${input1.value.length} caracteres`;
});

input2.addEventListener("input", () => {
  contador2.textContent = `${input2.value.length} caracteres`;
});

// --- Lógica: Bloco 1 (Geração) ---
btnGerar1.addEventListener("click", async () => {
  const valor = input1.value;

  // Validação de entrada vazia
  if (!valor.trim()) {
    msg1.textContent = "O campo está vazio. Digite um texto para gerar o hash.";
    msg1.className = "message error";
    return;
  }

  msg1.textContent = "";

  try {
    const hash = await calcularSHA256(valor);
    hashDisplay1.textContent = hash;
    btnCopiar1.disabled = false;
  } catch (error) {
    msg1.textContent = "Erro ao processar o hash: " + error.message;
    msg1.className = "message error";
  }
});

btnLimpar1.addEventListener("click", () => {
  input1.value = "";
  contador1.textContent = "0 caracteres";
  hashDisplay1.textContent = "—";
  btnCopiar1.disabled = true;
  msg1.textContent = "";
});

btnCopiar1.addEventListener("click", () => {
  copiarParaClipboard(hashDisplay1.textContent, msg1);
});

// --- Lógica: Bloco 2 (Comparação e Integridade) ---
btnGerar2.addEventListener("click", async () => {
  const valor2 = input2.value;

  if (!valor2.trim()) {
    msg2.textContent = "Digite uma informação para comparar.";
    msg2.className = "message error";
    return;
  }

  // Verifica se o Bloco 1 já gerou um hash
  if (hashDisplay1.textContent === "—") {
    msg2.textContent = "Gere primeiro o hash original no Bloco 1 para poder comparar.";
    msg2.className = "message error";
    return;
  }

  msg2.textContent = "";

  try {
    const hash2 = await calcularSHA256(valor2);
    hashDisplay2.textContent = hash2;
    btnCopiar2.disabled = false;

    // Etapa 7: Comparação de hashes
    const hash1 = hashDisplay1.textContent;
    statusComparacao.classList.remove("hidden");

    if (hash1 === hash2) {
      statusComparacao.className = "status-box match";
      statusComparacao.textContent = "INTEGRIDADE CONFIRMADA: Os dados são exatamente iguais.";
    } else {
      statusComparacao.className = "status-box mismatch";
      statusComparacao.textContent = "DADOS ALTERADOS: Os hashes são diferentes. O conteúdo foi modificado.";
    }
  } catch (error) {
    msg2.textContent = "Erro ao calcular verificação: " + error.message;
    msg2.className = "message error";
  }
});

btnLimpar2.addEventListener("click", () => {
  input2.value = "";
  contador2.textContent = "0 caracteres";
  hashDisplay2.textContent = "—";
  btnCopiar2.disabled = true;
  msg2.textContent = "";
  statusComparacao.classList.add("hidden");
});

btnCopiar2.addEventListener("click", () => {
  copiarParaClipboard(hashDisplay2.textContent, msg2);
});