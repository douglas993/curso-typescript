//Criando um alias para definir o tipo dos arquivos
type Funcionario  = 
{
    supervisores: string[],
    baterPonto: (horas: number) => string
} 

//Criando um funcionario a partir do alias de definição de dados
let funcionario: Funcionario = {
    supervisores: ["João", "André", "Maria"],
    baterPonto: function (numero: number): string {
        if(numero <= 8){
            return "Ponto OK"
        }else {
            return "Depois do horario"
        }        
    }
}
let funcionario2: Funcionario = {
    supervisores: ["Carlos", "Brenda"],
    baterPonto: function (numero: number): string {
        if(numero <= 8){
            return "Ponto OK"
        }else {
            return "Depois do horario"
        }        
    }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(18));
console.log(funcionario.baterPonto(7));


