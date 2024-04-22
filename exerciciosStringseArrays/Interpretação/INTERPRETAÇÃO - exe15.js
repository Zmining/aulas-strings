//1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array) // Imprimirá "undefined"

array = null
console.log('b. ', array) // Imprimirá "B. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log('c. ', array.length) // Imprimirá "C. 11"

let i = 0
console.log('d. ', array[i]) // Imprimirá 3

array[i+1] = 19
console.log('e. ', array) // Imprimirá [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // Imprimirá 9

//2. Leia o código abaixo com atenção 

const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//IMPRIMIRÁ "SUBI NUM ÔNIBUS EM MIRROCOS 27"