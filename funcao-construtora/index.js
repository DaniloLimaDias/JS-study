function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metado = function() {
    console.log(this.nome + ': sou um métado');
  }
}
const p1 = new Pessoa ('Luiz', 'Otávio');
const p2 = new Pessoa ('Danilo', 'Lima');
p2.metado();