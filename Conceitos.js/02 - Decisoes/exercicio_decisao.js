//const cidades = ["São Paulo", "Rio de Janeiro", "Florianópolis", "Recife"]

//cidades.forEach((element , index) => {
    // console.log("Número da execução: " , index + 1)
    // console.log("Nome da cidade: " + element)
    
   // if (element === "São Paulo"){
        //console.log("True")
        
    

    //} else
       // console.log("false")   
    

//})

const cidades = ["São Paulo", "Rio de Janeiro", "Florianópolis", "Recife"]

for (let index = 0; index < cidades.length; index++) {
     console.log("Número de Execução: " , index + 1)
     console.log("Nome das cidades: " + cidades[index])

    if (cidades[index] === "Recife") {
        console.log("Valor válido")
        break

    } else { 
        console.log("Valor inválido")
    }
        

}