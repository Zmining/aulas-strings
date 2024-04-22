/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
    seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista */
    const readlineSync = require('readline-sync');
    let comidasFavoritas = ["carne", "arroz", "feijão", "paçoca", "macarrão"]

    console.log(`2. ${comidasFavoritas}`)
    console.log(`Estas são minhas comidas favoritas:`)
    console.log(comidasFavoritas[0])
    console.log(comidasFavoritas[1])
    console.log(comidasFavoritas[2])
    console.log(comidasFavoritas[3])
    console.log(comidasFavoritas[4])

const pergunta = readlineSync.question(`Qual a sua comida favorita?`)

comidasFavoritas[1] = pergunta

console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
