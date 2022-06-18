function inverterTexto() {
  let texto = document.getElementById("texto").value;
  let resposta = document.getElementById("resposta");

  resposta.innerHTML = "Texto Invertido: ";

  for (let i = texto.length - 1; i >= 0; i--) {
    resposta.innerHTML += texto[i];
  }
}
