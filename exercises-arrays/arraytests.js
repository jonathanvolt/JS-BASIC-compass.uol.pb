let numbers = [3, 4];
// colocar no final da fila;
numbers.push(5,6);

// coloca no começo
numbers.unshift(1, 2);

// coloca no meio.
//O primeiro elemento é onde irá ser inserido;
//O segundo elemento é quantos elementos dali pra frente
// serão apagados;
// e depois vem os elementos que quer insetir;
numbers.splice(2,0,'a', 'b');

numbers.splice(2,3,'j', 'a', 15);


console.log(numbers);