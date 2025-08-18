//O array é feito sempre com Variavel + Nome dele (Paises) = [ "elemento", "elemento", "elemento",] e por estar em uma (const) (de exemplo) não pode ser alterado e ele é uma lista de dados

//O array é composto pelo elemento dele ou seja o que ele tem ["x" "x" "x"] e cada elemento possui um indice começando em 0 (sempre)

//Então para acessar cada elemento separadamente fazemos assim: console.log(paises[0]) que no caso o resultado será Brasil

//Se caso fizermos console.log(paises) o resultado será o tamanho total "Brasil", "Argentina", "Alemanha"

//console.log(paises[X]) acessa então uma posição do Array

// E para saber o tamanho total do Array o comando seria: console.log(paises.length) -> ele vai retornar o tamanho total

// Podemos também deixar mais completo no terminal através da concatenação - ela junta as Strings ("XXXXX:" + X)

const paises = ["Brasil", "Argentina", "Alemanha"] 
console.log("Acessando o país: " + paises[2]) // Junção de strings : String de ("acessando o país:) e string " + Paises [2])
console.log("Tamanho total do array: " + paises.length)


// Manipulações com o Array


paises.push("USA") //Adiciona um outro elemento no final do array, desse modo é possivel manipular uma const com Array
paises.pop() //Remove o ÚLTIMO ELEMENTO adicionado na manipulação ou no Array padrão
paises.unshift("França") // Adiciona um elemento no inicio ou seja ele se tornará o novo (0), mas o Índice aumenta (prestar atenção)
paises.shift() //Remove o PRIMEIRO ELEMENTO adicionado na manipulação ou no Array padrão




