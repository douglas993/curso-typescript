let canal: string = 'Gaveta'
let inscritos: number = 610234

//canal = inscritos
console.log(`Canal = ${canal}`);


// Problema causado porque a variavel nome ja foi declarada no escopo do projeto
// let nome: string = 'André'


function saudar(isManha: boolean): string {
    let saudacao: string 
    if (isManha){
        saudacao ='Bom dia'
    } else {
        saudacao = 'Boa vida'
    }
    return saudacao
}
