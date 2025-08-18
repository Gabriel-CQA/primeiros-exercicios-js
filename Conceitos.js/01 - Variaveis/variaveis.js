// Essa variavel pode ser alterada!

var nome = "Eduardo" // Uma variavel pode receber (texto) chamado de STRING
nome = "Pedro"
console.log (nome) // faz checagem no terminal, pode ser usado tanto a variavel padrão, no caso (nome) ou o resultado (Pedro) no log



// Essa variavel (Let) pode ser alterada! 
let idade = 20 // Uma variavel pode receber (números) seja inteiro ou flutuantes
idade = 30 // <- Exemplo de alteração




// Essa variavel (const) NÃO pode ser alterada!
const cidade = "São Paulo"



var maior_idade = false // boolen - verdadeiro ou falso



const paises = ["Brasil", "Argentina", "Alemanha" ] // <- O array é feito sempre com [ "", "", "",] e por estar em uma (const) não pode ser alterado e ele é uma lista de dados


// Isso é um Objeto, composto na ordem de: Chave e Valor

let devices = {
    nome: 'Iphone 14', // <- Chave (nome), Valor (Iphone 14)
    preco: 8000, 
    cores: {
        cor1: "vermelho",
        cor2: "azul"
    }
}
