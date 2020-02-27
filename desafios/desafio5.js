"use strict";
// Desafio classe Fila - Usar generics
// Atributo: fila (Tipo Array)
// Métodos: entrar(push), proximo(splice), imprimir(console.log)
class Fila {
    constructor(fila) {
        this.fila = fila;
    }
    entrar(nome) {
        console.log(`Inserindo ${nome} na Fila de atendimento`);
        this.fila.push(nome);
        console.log("------------------------");
    }
    proximo() {
        if (this.fila[0] === undefined) {
            console.log("Aguardando proximo cliente");
            console.log("------------------------");
        }
        else {
            console.log(`${this.fila[0]} teve seu atendimento finalizado`);
            this.fila.splice(0, 1);
            console.log("------------------------");
        }
    }
    imprimir() {
        if (this.fila.length == 0) {
            console.log("Não existe ninguem para ser atendido");
            console.log("------------------------");
        }
        else {
            console.log('--Imprimindo Fila--');
            console.log(this.fila);
            console.log("------------------------");
        }
    }
}
const names = new Fila(['Douglas', 'Bruno', 'Ricardo', 'João', 'Raphael']);
names.imprimir();
names.entrar('Samuel');
names.imprimir();
names.proximo();
names.imprimir();
names.proximo();
names.imprimir();
names.proximo();
names.imprimir();
names.proximo();
names.imprimir();
names.proximo();
names.imprimir();
names.proximo();
names.imprimir();
names.proximo();
names.imprimir();
