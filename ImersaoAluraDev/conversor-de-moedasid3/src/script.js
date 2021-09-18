function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);

  var valorEmReal = valorEmDolar * 5.24;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = " O valor em Real é de R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmDolar = valorEmReal / 5.24;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Dolar é de U$ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuro = parseFloat(valor);

  var valorEmReal = valorEmEuro / 6.18;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor  em Euro é de € " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
