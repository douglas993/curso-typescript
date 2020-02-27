"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
var moto = new Moto('Ducati');
moto.buzinar();
console.log("Velocidade atual é de : " + moto.velocidade);
moto.acelerar(30);
console.log("Velocidade atual é de : " + moto.velocidade);
// Exercício 2 - Herança
class objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends objeto2D {
    calculoArea() {
        return this.base * this.altura;
    }
}
const teste = new Retangulo(5, 8);
console.log("Calculo da área é: " + teste.calculoArea());
// Exercício 3 - Getters & Setters
class estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = 'Sem Registro';
        }
    }
}
const estag = new estagiario;
console.log(estag);
estag.primeiroNome = 'Le';
console.log(estag);
estag.primeiroNome = 'Leonardo';
console.log(estag);
