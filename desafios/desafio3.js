"use strict";
// Exercicio 1
const dobro = function (valor) {
    return valor * 2;
};
console.log(dobro(10));
const dobro2 = (valor2) => valor2 * 2;
console.log("Utilizando arrow function: " + dobro2(10));
// Exercicio 2
const dizerOla = function (nome = 'Pessoa') {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20, ...nums];
console.log(array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
console.log(nota1, nota2, nota3);
// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
