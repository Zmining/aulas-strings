/* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.
Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */


const readlineSync = require('readline-sync');

const usuario = readlineSync.question(`Digite seu usuário: `)
const email = readlineSync.question(`Digite seu e-mail: `)

console.log(`1. O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${usuario}!`)