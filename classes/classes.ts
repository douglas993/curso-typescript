class Data {
    //Publico por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(10, 9, 1993)
console.log(aniversario);

const casamento = new Data //Possivel emitir os "()"
casamento.ano = 2017
console.log("Data do casamento: " + casamento);


class DataEsperta {
    constructor(public dia: number = 1,public mes: number = 1,public ano: number = 1970){
    
    }
}

const aniversarioEsperto = new DataEsperta(10, 9, 1993)
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta //Possivel emitir os "()"
casamentoEsperto.ano = 2017
console.log("Data do casamento: " + casamentoEsperto);

console.log('------------------------------------------');

class Produto{
    constructor(public nome: string = "Sem nome", public preco: number = 0, public desconto: number = 0){
    }
    public descontoCalc() {
        return  this.preco - (this.preco * this.desconto)       
    }
    public resumo(): string {
        return `${this.nome} custa R$${this.descontoCalc().toFixed(2)} com o desconto de ${this.desconto * 100}%`
    }
}

const comDesconto = new Produto('Chave', 12.55, 0.25)
console.log(comDesconto);
console.log("O valor de desconto para o produto:" + comDesconto.nome + " É de: " + comDesconto.descontoCalc().toFixed(2));
console.log(comDesconto.resumo());


const semDesconto = new Produto('Cadeado', 8.95)
console.log(semDesconto);
console.log(semDesconto.resumo());
console.log('--------------------------------------------------------------------');

// Modificadores de acesso

class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){

    }

    //Colocar protected no metodo permite que o metodo seja utilizado e modificado em classes herdeiras
    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(){
        return this.alterarVelocidade(5)
    }

    public frear(){
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('BMW', '320i', 240)
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar());

Array(50).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear());

// Heranças

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }
    public acelerar(){
        return this.alterarVelocidade(20)
    }

    public frear(){
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`);
console.log('Aceleração em: ' + f40.acelerar());
console.log('Reduzindo velocidade para: ' + f40.frear());

// Getters & Setters
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number){
        if (valor >= 0 && valor <= 100){
            this._idade = valor
        }
    }
}

console.log('------------------------------------------');


const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1);

console.log('------------------------------------------');


// Atributos e metodos estaticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number){
        return this.PI * raio * raio
    }
}

//--Desse modo comentado é quando não se é declarado como estatico
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4));

console.log("Calculo da area do circulo é: " + Matematica.areaCirc(4));


console.log('------------------------------------------');


// Classes abstratas

abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado():number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicar extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(3, 5, 8, 1)
console.log("{Soma} Resultado da classe abstract é: " + c1.getResultado());

c1 = new Multiplicar()
c1.executar(3, 5, 8, 1)
console.log("{Multiplicação} Log do resultado da classe abstract é: " + c1.getResultado());


//Implementação de Singleton

class Unico{
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

// const errado = new Unico()
console.log(Unico.getInstance().agora());


//Somente leitura
class Aviao {
    public readonly modelo: string
    
    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'Dc-8'
// turboHelice.prefixo = 'pT-DEF'
console.log(turboHelice);
