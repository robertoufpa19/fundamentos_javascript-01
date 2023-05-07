
console.log(`Trabalhando com Condicionais`);


const listaDestino = new Array(
    `Suecia`,
    `Reino Unido`,
    `Africa`,
    `Brasil`
);

const idadeComprado = 18;
const estaAcompanhada = false; // esta acompanhado
let temPassagemComprada = false;
//const destino = `chile`;
const destino = `Reino Unido`;

console.log(`Lista de paises disponivel`);
console.log(listaDestino);

console.log(`Destino Selecionado ->`,listaDestino[1]);



const podeComprar = idadeComprado >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<4){
  if(listaDestino[contador] == destino) {
      destinoExiste = true;
      break;
  }
  // contador ++;
   contador += 1;


}

console.log(`Destino existe: `, destinoExiste);

 if(destinoExiste && podeComprar){
     console.log(`Boa Viajem!`);
 }else{
    console.log(`Erro!`); 
 } 

for(let i = 0; i < 4; i++){
    if(listaDestino[i] == destino) {
        destinoExiste = true;
 }
}