"use strict";
let canal = 'Gaveta';
let inscritos = 610234;
//canal = inscritos
console.log(`Canal = ${canal}`);
// Problema causado porque a variavel nome ja foi declarada no escopo do projeto
// let nome: string = 'André'
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Boa vida';
    }
    return saudacao;
}
