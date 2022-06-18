const faturamentoSp = 67836.43;
const faturamentoRj = 36678.66;
const faturamentoMg = 29229.88;
const faturamentoEs = 27165.48;
const faturamentoOutros = 19849.53;

faturamentoTotal =
  faturamentoSp +
  faturamentoRj +
  faturamentoMg +
  faturamentoEs +
  faturamentoOutros;

porcentamSp = (faturamentoSp / faturamentoTotal) * 100;
porcentamRj = (faturamentoRj / faturamentoTotal) * 100;
porcentamMg = (faturamentoMg / faturamentoTotal) * 100;
porcentamEs = (faturamentoEs / faturamentoTotal) * 100;
porcentamOutros = (faturamentoOutros / faturamentoTotal) * 100;

function calcularPorcentam() {
  let resposta = document.getElementById("resposta");

  resposta.innerHTML = "SP - " + Math.round(porcentamSp * 100) / 100 + "%<br>";
  resposta.innerHTML += "RJ - " + Math.round(porcentamRj * 100) / 100 + "%<br>";
  resposta.innerHTML += "MG - " + Math.round(porcentamMg * 100) / 100 + "%<br>";
  resposta.innerHTML += "ES - " + Math.round(porcentamEs * 100) / 100 + "%<br>";
  resposta.innerHTML +=
    "Outros - " + Math.round(porcentamOutros * 100) / 100 + "%";
}
