function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

let data = fazGet("./dados.json");
let dias = JSON.parse(data);

function calcularMediaMensal() {
  let totalDias = 0;
  let mediaMensal = 0;
  let totalValorMensal = 0;
  dias.forEach((element) => {
    if (element.valor != 0) {
      totalValorMensal = totalValorMensal + element.valor;
      totalDias = totalDias + 1;
    }
  });
  mediaMensal = totalValorMensal / totalDias;
  return mediaMensal;
}

function maiorQueMediaMensal() {
  let mediaMensal = calcularMediaMensal();
  let maiorQueMediaMensalText = document.getElementById("maiorQueMediaMensal");
  let maiorQueMediaMensal = 0;
  dias.forEach((element) => {
    if (element.valor > mediaMensal) {
      maiorQueMediaMensal += 1;
    }
  });

  maiorQueMediaMensalText.innerHTML = maiorQueMediaMensal;
}

function maiorFaturamentoDoMes() {
  let maiorFaturamento = 0;
  let maiorFaturamentoText = document.getElementById("maiorFaturamentoDoMes");
  dias.forEach((element) => {
    if (element.valor > maiorFaturamento) {
      maiorFaturamento = element.valor;
    }
  });

  maiorFaturamentoText.innerHTML = maiorFaturamento;
}

function menorFaturamentoDoMes() {
  let menorFaturamento;
  let menorFaturamentoText = document.getElementById("menorFaturamentoDoMes");
  dias.forEach((element) => {
    if (element.dia == 1) {
      menorFaturamento = element.valor;
    } else {
      if ((element.valor < menorFaturamento) & (element.valor != 0)) {
        menorFaturamento = element.valor;
      }
    }
  });

  menorFaturamentoText.innerHTML = menorFaturamento;
}
