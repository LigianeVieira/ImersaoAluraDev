var nota1 = parseFloat(prompt ("Digite a nota do primeiro bimestre"))

var nota2 = parseFloat(prompt ("Digite a nota do segundo bimestre"))

var nota3 = parseFloat(prompt ("Digite a nota do terceiro bimestre"))

var nota4 = parseFloat(prompt ("Digite a nota do quarto bimestre"))

var media = (nota1 + nota2 +nota3+nota4)/4

var notaFinal=(media.toFixed(1))


console.log("Sua média final foi : "+notaFinal)