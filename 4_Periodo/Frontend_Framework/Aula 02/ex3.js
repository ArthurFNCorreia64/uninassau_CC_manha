const { question } = require("readline-sync");

let n1 = Number(question("Digite um numero: "));
let n2 = Number(question("Digite outro numero: "));
let op = question("Escolha a operacao (+ - * /): ");

function soma(n1, n2){
    return console.log("Soma = ", n1+n2);
};

function sub(n1, n2){
    return console.log("Subtração = ", n1-n2);
};

function mult(n1, n2){
    return console.log("Multiplicação = ", n1*n2);
};

function div(n1, n2){
    if (n2 != 0){
        return console.log("Divisão = ", n1/n2);
    } else {
        return console.log("Impossível dividir por Zero!");
    }
};


if (op === "+"){
    soma(n1, n2);
} else if (op === "-") {
    sub(n1, n2);
} else if (op === "*") {
    mult(n1, n2);
} else if (op === "/") {
    div(n1, n2);
} else {
    console.log("Operação Inválida!");
};
