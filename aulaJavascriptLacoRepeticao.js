/*
const nome = "Henrique";
const sobrenome = "Jacob";

console.log(`Meu nome é  ${nome} ${sobrenome}`);

let idade; //declarando variavel

idade = 31; //atribuindo
*/

const listaDeDestinos = new Array();

listaDeDestinos.push("São Paulo");
listaDeDestinos.push("Rio de Janeiro");
listaDeDestinos.push("Salvador");
listaDeDestinos.push("Curitiba");

const idadeComprador = 14;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    
    if(listaDeDestinos[contador] == destino){

        destinoExiste = true;
        break;

    }
    
    contador += 1;

}
console.log("Destino existe: " , destinoExiste);

if(podeComprar && destinoExiste){

    console.log("Boa viagem!");

}else{

    console.log("Desculpe ocorreu um erro!");
}
