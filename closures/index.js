function retornaFuncao(name){
  return function(){
    return name;
  };
}

const funcao = retornaFuncao('danilo');
const funcao2 = retornaFuncao('lima');
console.dir(funcao())
console.dir(funcao2())