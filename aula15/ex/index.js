const numero = Number(prompt('Digite um número'))
const numeroTitulo = document.getElementById('numero-titulo')
const raiazQuadrada = document.getElementById('raiz-quadrada')
const eNaN = document.getElementById('NaN')
const arredondadoParaBaixo = document.getElementById('floor')
const arredondadoParaCima = document.getElementById('ceil')
const duasCasas = document.getElementById('to-fixed')
const resultadoInt = document.getElementById('resultado-int')

numeroTitulo.innerHTML = numero
raiazQuadrada.innerHTML = Math.sqrt(numero)
resultadoInt.innerHTML = Number.isInteger(numero)
eNaN.innerHTML = isNaN(numero)
arredondadoParaBaixo.innerHTML = Math.floor(numero)
arredondadoParaCima.innerHTML = Math.ceil(numero)
duasCasas.innerHTML = numero.toFixed(2)