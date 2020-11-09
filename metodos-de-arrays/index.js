// let lista = ['ovo', 'farinha', 'açucar', 'chocolate'];
// let lista2 = ['prato', 'liquidificador', 'forno'];






// lista.sort(); // coloca na ordem alfabetica;
// lista.reverse(); // inverte o array
// let res = lista.concat(lista2);
// lista.splice(1, 1); // remove apartir do item um , um item 
// lista[0] = 'ovos' // altera o item do array pasado
// lista[ lista.length ] = 'fruta'
// lista.pop(); // remove o ultimo item da lista
// lista.shift(); // remove o primeiro item
// lista.push('prato'); // adiciona um novo item

// let res = lista.toString(); // junta tudo 
// let res = lista.join('-');
// let res = lista.indexOf('açuca'); // procura os itens dentro de um array, > q -1 = achou 

let lista3 = [1, 11, 25, 15, 35,]
let lista4 = []
 
// lista4 = lista3.map((item)=>item * 2) // mapeia o array e modifica os elementos

// lista4 = lista3.filter((item)=>{ // filtra o array e retorna os true
//   return item < 20
// })

// lista4 = lista3.every((item)=>{ // todos os elementos devem estar de arcordo com a condição feita
//   return item < 20
// })

lista4 = lista3.some((item)=>{ // basta 1 elemento estar de acordo com a condição
  return item < 20
})

let res = lista4;

console.log(res)