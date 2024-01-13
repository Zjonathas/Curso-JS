const nome = 'Jonathas';
const sobrenome = 'Carneiro'
let idade = 19;
let peso = 84;
let alturaEmM = 1.80;
let indiceDeMassaCorporal;
const dataDeNascimento = 2024 - idade

indiceDeMassaCorporal = peso / (alturaEmM ** 2)

console.log(`${nome} ${sobrenome} tem ${idade} anos, e pesa ${peso} kg.`)
console.log(`Tem altura de ${alturaEmM} metros e seu IMC é de ${indiceDeMassaCorporal}.`)
console.log(`${nome} nasceu em ${dataDeNascimento}`)