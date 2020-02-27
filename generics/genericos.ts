function echo(objeto: any) {
    return objeto
}

console.log(echo('Douglas S').length);
console.log(echo(27).length);
console.log({nome: "Samanta", Idade: 20, Sexo: 'F'});

//Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('Douglas S').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({nome: "Samanta", Idade: 20, Sexo: 'F'}));

//Generics disponiveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes);

//Array
function imprimir<T>(args: T[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
console.log('--------------------');
imprimir<number>([3, 2, 1])
console.log('--------------------');
imprimir<string>(['2', '3', '1'])
console.log('--------------------');
imprimir<{ nome: string, idade: number}> ([
    {nome: 'Fulano', idade: 22},
    {nome: 'Ciclano', idade: 23},
    {nome: 'Beltrano', idade: 24}
])
console.log('--------------------');

type Aluno = { nome: string, idade: number } 
imprimir<Aluno> ([
    {nome: 'Fulano', idade: 22},
    {nome: 'Ciclano', idade: 23},
    {nome: 'Beltrano', idade: 24}
])


//Tipo Generico
const chamarEcho: <T>(data: T) => T = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa aqui <>'));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T){}

    abstract executar(): R  
}
// console.log(new OperacaoBinaria('Bom', 'Dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(6, ' Meia Duzia').executar());

console.log('----Soma Binaria----');

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 6).executar());

console.log('-----Diferença entre Datas-----');
class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data: Data): number{
        let { dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }


    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(4, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())

























