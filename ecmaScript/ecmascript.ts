// let e const
let seraQuePode = '?'
console.log(seraQuePode);

let estaFrio = true
if (estaFrio){
    let acao = 'Colocar o casaco'
    console.log(acao);    
}

const cpf: string = '123.456.000-99'
// cpf = '999.123.890-00'
console.log(cpf);

var segredo = 'externo'
function revelar(){
    var segredo = 'interno'
    console.log(segredo);
}
console.log(segredo);
revelar();


// arrow function
const somar = function(n1: number, n2: number): number { //declanrando uma função anonima dentro de uma variavel
    return n1 + n2
}
console.log(somar(2, 5));

//mesma coisa da de cima só que declarando a função
// function somar(n1: number, n2: number): number { //declanrando uma função anonima dentro de uma variavel
//     return n1 + n2
// }
// console.log(somar(2, 5));
const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(2,6));

const saudacao = ()=> console.log('Olá');
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa);
falarCom('Miranda')

//this 
// function normalComThis(){
//     console.log(this);
// }
// const normalComThisEspecial = normalComThis.bind('Hello')
// normalComThisEspecial()

// const arrowComThis = () => console.log(this);
// arrowComThis()


//Parametros padrão
function contagemRegressiva(inicio: number = 3){
    console.log(inicio);
    while (inicio > 0){
        inicio--    
        console.log(inicio);
            
    }
    console.log("Fim!");
    
}
contagemRegressiva()
console.log("--Teste--");
contagemRegressiva(5)

// Rest e Spread
const number = [1, 10, 99, 102, -5]
// console.log("Número maximo é " + Math.max(number[0], number[1], number[2], number[3]));
console.log("Número maximo é " + Math.max(...number)) //os ... significa o rest e spread

const turmaA = ["Arthur", "João", "Maria"]
const turmaB = ["Douglas", "Brenda", "Ivan", ...turmaA]
console.log(turmaB);

function retornaArray(...args: number[]): number[] {
    return args
}
const retorno = retornaArray(2,3, 4, 6, 8);
console.log(retorno);
console.log(retornaArray(...number));

//Spread e rest com tupla
const tupla: [number, string, boolean] = [1, 'abc', true]

function tumplaParam1 (a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)    
}
tumplaParam1(...tupla)

function tumplaParam2 (...params: [number, string, boolean]) {
    console.log(Array.isArray(params));    
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tumplaParam2(...tupla)

//Destructuring
const caracteristicas = ['Motor 2.0', 2020]
//Modo dificil
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor);
console.log(ano);

//Destructuring objeto
const item = {
    nome: 'SSD',
    preco: 231.55,
    caracteristica: {
        w: 'Importado'
    }
}

const {nome: nomi, preco: p, caracteristica: { w } } = item
console.log(nomi);
console.log(p);
console.log(w);

//Interpolação
const userID: string = 'SuportCod3r'
const notifications: string = '9'
const boasVindas = 'Boas Vindas ' + userID + '| Notificações: ' + notifications;
console.log(boasVindas);
const boasVindas2 = `Boas Vindas  ${userID}, Notificações: ${parseInt(notifications) > 9 ? '+9': notifications}`
console.log(boasVindas2);


// Callback
function esperar3S(callback: (dados: string) => void) {
    setTimeout(() => {
        callback('3s depois...')        
    }, 3000)
}
esperar3S(function(resultados: string){
    console.log(resultados);
});

//Promise
function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois - Promise - ') 
        }, 3000)
    })
}
esperar3sPromise()
    .then(dado => console.log(dado));

fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilms => resFilms.json())
    .then(filme => console.log(filme.title))

