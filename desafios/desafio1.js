"use strict";
//Criando um funcionario a partir do alias de definição de dados
let funcionario = {
    supervisores: ["João", "André", "Maria"],
    baterPonto: function (numero) {
        if (numero <= 8) {
            return "Ponto OK";
        }
        else {
            return "Depois do horario";
        }
    }
};
let funcionario2 = {
    supervisores: ["Carlos", "Brenda"],
    baterPonto: function (numero) {
        if (numero <= 8) {
            return "Ponto OK";
        }
        else {
            return "Depois do horario";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(18));
console.log(funcionario.baterPonto(7));
