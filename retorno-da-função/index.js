// function soma(a, b){
//   return a + b
// } 
// const quatro = soma(2 , 2)
// console.log(quatro)


// function criaPessoa(nome, sobrenome){
//   return {nome, sobrenome};
// }

// const p1 = criaPessoa('Danilo', 'Lima')
// console.log(p1)

//maneira erra de se fazer, codigo repetido
// function duplica(n){
//   return n * 2
// };

// function triplica(n){
//   return n * 3
// };

// function quadriplica(n){
//   return n * 4
// };

//maneira correta de se fazer

function criaMutiplicador(multiplicador){
  return function(n){
    return n * multiplicador
  };
}

const duplica = criaMutiplicador(2)
const triplica = criaMutiplicador(3)
const quadriplica = criaMutiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))