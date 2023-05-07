
console.log(`Trabalhando com Listas`);

// const canada = `Canada`;
// const holanda = `Holanda`;
// const estadosUnidos = `Estados Unidos`;
// const alemanha = `Alemanha`;

// console.log(`Lista de paises 1`);
// console.log(canada, holanda, estadosUnidos, alemanha);


const listaDestino = new Array(
    `Suecia`,
    `Reino Unido`,
    `Africa`,
    `Brasil`
);
 listaDestino.push(`Argentina`); // adiciona item na lista 

console.log(`Lista de paises 2`);
console.log(listaDestino);

listaDestino.splice(2, 1) // remove o elemento da posicao 2 e remove o numero de elementos que e 1
console.log(`Removendo item da lista`);
console.log(listaDestino);

// acessar um unico elemento
console.log(`Acessando a posicao de um elemento`);
console.log(listaDestino[3]);



// acessar mais de 1 elemento
console.log(`Acessando a posicao de mais de 1 elemento`);
console.log(listaDestino[3], listaDestino[0]);





