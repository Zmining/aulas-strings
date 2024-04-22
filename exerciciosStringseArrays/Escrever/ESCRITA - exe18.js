/* 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, 
    uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console */

    const readlineSync = require('readline-sync');
    let listaDeTarefas = []

    const tarefa1 = readlineSync.question(`Qual sua primeira tarefa do dia? `)
    listaDeTarefas.push(tarefa1)

    const tarefa2 = readlineSync.question(`Qual sua segunda tarefa do dia? `)
    listaDeTarefas.push(tarefa2)

    const tarefa3 = readlineSync.question(`Qual sua terceira tarefa do dia? `)
    listaDeTarefas.push(tarefa3)

    console.log(`3. ${listaDeTarefas}`)

    const tarefaRealizada = readlineSync.question(`Qual tarefa você já realizou (0, 1 ou 2)?`)

    listaDeTarefas.splice(tarefaRealizada, 1)

    console.log(listaDeTarefas)
