// DESAFIO 2
/* Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice
da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array */
const readlineSync = require('readline-sync');

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const Abacaxi = frutas.indexOf("Abacaxi")
console.log(`${Abacaxi}, ${frutas.length}`)
