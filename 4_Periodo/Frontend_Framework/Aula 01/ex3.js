const { question } = require("readline-sync");

let nome = question("Digite o nome do vendedor: ");
let salario = Number(question("Digite seu salario: "));
let vendas = Number(question("Digite o total de vendas (R$): "));

console.log("Vendedor: " + nome);
console.log("Salário fixo: " + salario);
console.log("Salário final: " + Number(salario+0.15*vendas));