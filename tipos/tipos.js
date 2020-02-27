"use strict";
// string
let nome = 'Douglas';
console.log(nome);
// numbers
let idade = 26;
console.log(idade);
// boolean
let possibleHobbies = false;
console.log(possibleHobbies);
// Tipos explicitos
let minhaIdade;
minhaIdade = 26;
console.log(typeof minhaIdade);
minhaIdade = "A minha idade é 26";
console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinha", "Jogar", "Nadar"];
console.log(hobbies[2]);
console.log(typeof hobbies);
// tuplas
let endereco = ["Rua Américo Magalhães", 310, 204];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; //2
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019
};
console.log(carro);
// funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 3));
// tipo função
let calculo;
calculo = multiplicar;
// const testes = function (a: number, b: number): boolean {
//     return false
// }
// objetos
let usuario = {
    nome: 'Douglas',
    idade: 26
};
console.log(usuario);
// Union types
let nota = 10;
console.log(`A nota é ${nota}`);
// Checando tipos
let valor = 30;
if (typeof valor == "number") {
    console.log("É um number");
}
else {
    console.log(typeof valor);
}
// Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validaProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validaProduto();
