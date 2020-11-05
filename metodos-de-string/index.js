let nome = 'Danilo lima dias';

let resultado = nome.length;
resultado = nome.indexOf('n');
resultado = nome.slice(2,6) // ou (2) vai pegar apartir do 2 // pegando parte de uma string
resultado = nome.substr(0,4) // o segundo parametro é a quantidade de caractesres que ele vai pegar
resultado = nome.replace('danilo', 'danilo lima dias'); //substitui a palavra;
resultado = nome.toUpperCase();
resultado = nome.toLowerCase();
resultado = nome.concat(' lima');
resultado = nome.trim(); // tira os espaços 
resultado = nome.charAt(2); //mostra o que tem na posição 2
resultado = nome.split(' '); // trnsfoma uma string em array 

console.log(resultado)