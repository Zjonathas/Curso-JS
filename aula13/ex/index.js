const nome = prompt('Digite seu nome completo')
const nomeSemEspaco = nome.split(' ')
const charOfName = nome.split('')
document.body.innerHTML = `O seu nome é ${nome} <br />`
document.body.innerHTML += `O seu nome tem ${charOfName.length} letras<br />`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br />`
document.body.innerHTML += `Primeiro indice da letra "a": ${nome.indexOf('a')}<br />`
document.body.innerHTML += `Último indice da letra "a": ${nome.lastIndexOf('a')}<br />`
document.body.innerHTML += `As últimas três letras do seu nome são: ${nome.slice(-3)}<br />`
document.body.innerHTML += `As palavras do seu nome são: ${nomeSemEspaco}<br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`
