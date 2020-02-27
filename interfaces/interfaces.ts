interface Humano {
    nome: string
    idade?: number //Isso informa que o atributo é opcional
    [prop: string]: any
    saudar(sobrenome: string): void
}


function saudarComOla(pessoa: Humano){
    console.log('Olá ' + pessoa.nome);
    
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Douglas'
}

const pessoa: Humano = {
    nome: 'Arthur',
    idade: 26,
    saudar(sobrenome: string){
        console.log('Olá, meu nome é '
        + this.nome + ' ' + sobrenome);
        
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'José', idade: 10, xyz: true })
pessoa.saudar('Souza')


//Usando classes
class Clientes implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string): void {
        console.log('Olá, cliente '
        + this.nome + ' ' + sobrenome +
        '. Sua ultima compra foi em: ' 
        + this.ultimaCompra);
    }

}

const meuCliente = new Clientes()
meuCliente.nome = 'Dominique'
saudarComOla(meuCliente)
meuCliente.saudar('Toretto')

//Interface função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function (base: number, expoente: number): number {
    //Math.pow(base, expoente)
    //base ** expoente
    return Array(expoente).fill(base).reduce((t,a) => t * a)
}

console.log('O calculo de potencia tem como resultado: ' + potencia(2, 8));
console.log('O calculo de potencia tem como resultado: ' + Math.pow(2, 8));
console.log('O calculo de potencia tem como resultado: ' + 2 ** 8);

//Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {

    }
}

class RealAB implements A,B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a():void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object{
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString());    
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = { 
    nome: 'Pedro', 
    toString() {
        return this.nome
    }
}
cli.log()
