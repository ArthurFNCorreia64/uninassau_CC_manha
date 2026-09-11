const { question } = require("readline-sync");

let nome = question("Digite seu nome: ");

for (let i = 0; i <= 100; i=i+10){
    console.log(i, nome);
}