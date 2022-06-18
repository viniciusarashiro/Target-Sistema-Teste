function fibonacci() {
  let resposta = document.getElementById("resposta");
  let penultimo = 0;
  let ultimo = 1;
  let numero;
  let cont = 0;
  let numeroInformado = parseInt(document.getElementById("numero").value);
  while (cont <= numeroInformado) {
    numero = penultimo + ultimo;
    console.log(numero);
    penultimo = ultimo;
    ultimo = numero;
    cont += 1;
    if (numeroInformado == numero) {
      resposta.innerHTML = "Número encontrado na sequência de Fibonacci";
      break;
    } else if (cont == numeroInformado) {
      resposta.innerHTML = "Número não encontrado na sequência de Fibonacci";
    }
  }
}
