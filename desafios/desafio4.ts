// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0

    constructor(nome: string){
    }

    buzinar(){
        console.log('Toooooooooot!')
    }

    acelerar(delta: number){
        this.velocidade = this.velocidade + delta
    }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log("Velocidade atual é de : " + moto.velocidade)
moto.acelerar(30)
console.log("Velocidade atual é de : " + moto.velocidade)



// Exercício 2 - Herança
abstract class objeto2D {
    constructor(public base: number = 0,public altura: number = 0){
    }

    abstract calculoArea(): number
}

class Retangulo extends objeto2D{
    calculoArea(){
        return this.base * this.altura
    }
}

const teste = new Retangulo(5, 8)
console.log("Calculo da área é: " + teste.calculoArea());

 
// Exercício 3 - Getters & Setters
class estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string{
        return this._primeiroNome
    }

    set primeiroNome(nome:string) {
        if (nome.length >= 3){
        this._primeiroNome = nome
        }
        else{
            this._primeiroNome = 'Sem Registro'
        }
    }
}
const estag = new estagiario

console.log(estag)
estag.primeiroNome = 'Le'
console.log(estag)
estag.primeiroNome = 'Leonardo'
console.log(estag)