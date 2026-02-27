function gerarTabuada() {
  let resultadoFinal = "";

  let numero = 1;

  while (numero <= 10) {
    resultadoFinal += `<div class='card'>`;
    resultadoFinal += `<h3>Tabuada do ${numero}</h3>`;

    let multiplicador = 1;

    while (multiplicador <= 10) {
      resultadoFinal += `${numero} x ${multiplicador} = ${numero * multiplicador} <br>`;

      multiplicador++;
    }

    resultadoFinal += `</div>`;

    numero++;
  }

  document.getElementById("resultado").innerHTML = resultadoFinal;
}

function limpar() {
  document.getElementById("resultado").innerHTML = "";
}
