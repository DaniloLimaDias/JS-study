function criaPessoa(nome, sobrenome, altura, peso){
  return {
    nome,
    sobrenome,

    //getter
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`;
    }, 

    //Setter
    set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();
      console.log(valor);
    }, 
    fala(assunto = 'está falando sobre nada'){
      return `${this.nome} está ${assunto} e tem ${this.peso}`;
    },
    altura,
    peso,
    imc(){
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
p1.nomeCompleto = 'Danilo Lima Dias';
console.log(p1.name);
console.log(p1.sobrenome);
console.log(p1.fala());