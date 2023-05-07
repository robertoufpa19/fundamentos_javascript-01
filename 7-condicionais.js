
console.log(`Trabalhando com Condicionais`);

const idadeComprado = 17;
const estaAcompanhada = true; // esta acompanhado
//const estaAcompanhada = false; // nao esta acompanhado



const listaDestino = new Array(
    `Suecia`,
    `Reino Unido`,
    `Africa`,
    `Brasil`
);
console.log(`Lista de paises disponivel`);
console.log(listaDestino);

if(idadeComprado >= 18){
 console.log(`Comprador Maior de idade`);
 console.log(`Destino do passageiro`);
 console.log(listaDestino[2]);

 console.log(`Lista de paises disponivel`);
 listaDestino.splice(2, 1) // remove o elemento da posicao 2 e remove o numero de elementos que e 1
 console.log(listaDestino);

}else if(estaAcompanhada){
        console.log(`Compra Aprovada! Comprador Menor de idade. Mas, esta acompanhda de um maior!`);
        console.log(`Destino dos passageiros : `+ listaDestino[2]);

    }else if (idadeComprado <= 18 && estaAcompanhada == false){
        console.log(`Voce nao pode Embarca!  Passageiro menor de Idade e desacompanhado`);
      }
    
    else{
        console.log(`Compra Negada!  Passageiro menor de Idade`);  
    }
 









