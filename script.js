/* ARRAY - Uma estruturasemlhante a uma lista de dados com posicções definidadas, que podemos percorrer tilizando estruturas de repetiçoes.

Ele pode armazenando strings
*/
{
    listaNomes = ['cleyton', 'Dimas', 'caue']
    console.log(listaNomes)

    listaNumeros = ['1,2,3,4,5,6,7,8,9']
    console.log(listaNumeros) 

    /* Não muito recomendavel*/
    listamistadagalaxia = [1,'cleyton', 4]
    console.log(listamistadagalaxia) 

}

{
    let frutas = []
    console.log('Lista de frutas:',frutas);

    //adicionando no final do array
    frutas.push('banana')
    console.log('Lista de frutas:', frutas);

    frutas.push('Maça')
    console.log('Lista de frutas:', frutas)


    //adiciona um valor no inicio do array

    frutas.unshift('Laranja')
    console.log('Lista de frutas:', frutas)

    //removendo um item no final do array
    frutas.pop()
    console.log('Lista de frutas:', frutas)

    //remover um valor
    frutas.shift('banana')
    console.log('Lista de frutas:', frutas)

    
}