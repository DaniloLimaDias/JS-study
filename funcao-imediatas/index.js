(function(idade, peso, altura){
  const sobrenome = 'Mirando';
  function criaNome(nome){
    return nome + ' ' + sobrenome;
  }

  function falaNome(){
    console.log(criaNome('Luiz'));
  }
  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.80);