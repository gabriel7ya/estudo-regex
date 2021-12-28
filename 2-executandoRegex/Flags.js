// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'

console.log(texto.match(/C|ai/))
console.log(texto.match(/c|ai/i))
console.log(texto.match(/ai|c/gi))