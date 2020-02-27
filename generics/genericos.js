"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Douglas S').length);
console.log(echo(27).length);
console.log({ nome: "Samanta", Idade: 20, Sexo: 'F' });
//Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Douglas S').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "Samanta", Idade: 20, Sexo: 'F' }));
//Generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
//Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
console.log('--------------------');
imprimir([3, 2, 1]);
console.log('--------------------');
imprimir(['2', '3', '1']);
console.log('--------------------');
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
console.log('--------------------');
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
//Tipo Generico
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa aqui <>'));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom', 'Dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(6, ' Meia Duzia').executar());
console.log('----Soma Binaria----');
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 6).executar());
console.log('-----Diferença entre Datas-----');
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(4, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
