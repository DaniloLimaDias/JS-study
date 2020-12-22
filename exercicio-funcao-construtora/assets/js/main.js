function Calculadora(){
  this.display = document.querySelector('.display')

  this.inicia = function() {
    this.cliqueBotoes();
    this.pressionaEnter();
  }

  this.pressionaEnter = function(){
    this.display.addEventListener('keyup', (e) => {
      if(e.keyCode === 13) {
        this.realizaConta();
      }
    })
  },

  this.clearDisplay = function() {
    this.display.value = '';
  }

  this.apagaUm = function() {
    this.display.value = this.display.value.slice(0, -1);
  }

  this.realizaConta = function() {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert('Conta inválida');
        return;
      }
      this.display.value = String(conta);

    }catch(e){
      alert('Conta inválida');
      return;
    }
  },


  this.cliqueBotoes = function() {
    this.click = document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        this.btnParaDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        this.clearDisplay();
      }

      if (el.classList.contains('btn-del')) {
        this.apagaUm();
      }

      if (el.classList.contains('btn-eq')) {
        this.realizaConta();
      }
    });
  }
  this.btnParaDisplay = function(valor) {
    this.display.value += valor;
    this.display.focus();
  }
}
const calculadora = new Calculadora();
calculadora.inicia();
