"use strict";
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Douglas';
}
const pessoa = {
    nome: 'Arthur',
    idade: 26,
    saudar(sobrenome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'José', idade: 10, xyz: true })
pessoa.saudar('Souza');
//Usando classes
class Clientes {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, cliente '
            + this.nome + ' ' + sobrenome +
            '. Sua ultima compra foi em: '
            + this.ultimaCompra);
    }
}
const meuCliente = new Clientes();
meuCliente.nome = 'Dominique';
saudarComOla(meuCliente);
meuCliente.saudar('Toretto');
let potencia;
potencia = function (base, expoente) {
    //Math.pow(base, expoente)
    //base ** expoente
    return Array(expoente).fill(base).reduce((t, a) => t * a);
};
console.log('O calculo de potencia tem como resultado: ' + potencia(2, 8));
console.log('O calculo de potencia tem como resultado: ' + Math.pow(2, 8));
console.log('O calculo de potencia tem como resultado: ' + Math.pow(2, 8));
class RealA {
    a() {
    }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
