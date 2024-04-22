// DESAFIO
/* Receba uma frase e retorne um array onde cada elemento
é uma das palavras da frase, ignorando os espaços */
const readlineSync = require('readline-sync');


const frase = readlineSync.question(`Escreva uma frase: `)

const array = frase.split(" ")
console.log(array)
