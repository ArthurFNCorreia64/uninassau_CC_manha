let readline = require("readline-sync")

let n1 = Number(readline.question("Insira um numero: "))
let n2 = Number(readline.question("Insira outro numero: "))
let op = readline.question("Qual operador (+ - *)? ")

switch (op) {
    case "+":
        console.log(n1+n2)
        break
    case "-":
        console.log(n1-n2)
        break
    case "*":
        console.log(n1*n2)
        break
    default:
        console.log("Operação inválida!")
        break
          
}