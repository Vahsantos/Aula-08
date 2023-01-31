let itens = ['Sem cadastro', 'leite', 'ovo', 'farinha', 'milho', 'cafe']

let cod = Number(prompt('digite o codigo da posicao para saber qual produto correspondendo:'))

if (!isNaN(cod)) {
    if (cod >= itens.length) {
        let confirma = confirm(`${itens[0]}. Deseja incluir um novo produto?`)


        if (confirma) {
            let novoProduto = prompt('digite o nome do novo produto:')
            if (novoProduto != null)
                itens.push(novoProduto)
            alert(`o novo produto incluido é ${novoProduto}. codigo deste novo produto é ${(itens.length - 1)}`)
        }
        else {
            alert('obrigada por utilizar o nosso sistema!')
        }

    } else {
        alert(`O produto correspodente ao codigo ${cod} é ${itens[cod]}.`)
    }


} else {
    alert('[ERRO] Necessario digitar um numero para checar o produto correspondente ')
}