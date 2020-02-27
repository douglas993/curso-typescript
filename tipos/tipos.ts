// string
let nome: string = 'Douglas'
console.log(nome)

// numbers
let idade: number = 26
console.log(idade)

// boolean
let possibleHobbies: boolean = false
console.log(possibleHobbies)

// Tipos explicitos
let minhaIdade: any
minhaIdade = 26
console.log(typeof minhaIdade)
minhaIdade = "A minha idade é 26"
console.log(typeof minhaIdade);


// array
let hobbies: any[] = ["Cozinha", "Jogar", "Nadar"]
console.log(hobbies[2]);
console.log(typeof hobbies);

// tuplas
let endereco = ["Rua Américo Magalhães", 310, 204]
console.log(endereco);

// enums
enum Cor {
    Cinza, //0
    Verde, //1
    Azul //2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor);


// any
let carro: any = 'BMW'
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019
}
console.log(carro);

// funções
function retornaNome(): string {
    return nome
}
console.log(retornaNome());

function digaOi() {
    console.log('Oi')
}
digaOi()


function multiplicar(numA: number, numB: number): number {
    return numA*numB
}
console.log(multiplicar(2, 3));


// tipo função
let calculo: (numeroA: number, numeroB: number) => number
calculo = multiplicar
// const testes = function (a: number, b: number): boolean {
//     return false
// }


// objetos
let usuario: { nome: string, idade: number} = {
    nome: 'Douglas',
    idade: 26
}
console.log(usuario);



// Union types
let nota: number | string = 10;
console.log(`A nota é ${nota}`);


// Checando tipos
let valor = 30

if (typeof valor == "number"){
    console.log("É um number");    
}else {
    console.log(typeof valor);
    
}


// Never
function falha(msg: string): never {
    throw new Error(msg);
}

const produto = {
    nome: 'Sabão',
    preco: -1,
    validaProduto(){
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preço inválido')
        }
    }
}

produto.validaProduto();