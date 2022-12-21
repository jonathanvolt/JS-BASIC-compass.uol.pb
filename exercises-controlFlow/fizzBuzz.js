// Exercício 3
// Divisivel por 3 = Fizz;
// Divisivel por 5 = Buzz;
// Divisivel por ambos = FizBuzz;
// Não é divisivel por 3 e 5 = input saí;
// not a number = 'not a number'
// || (input == 0)

let input = 3;

if ((((input / 1 ) == input)) ){

     if(((input % 3) == 0) && ((input % 5) == 0) ){
        console.log('FizBuzz');
    } else if (((input % 3) == 0)){
        console.log('Fizz');
    } else if (((input % 5) == 0)){
        console.log('Buzz');
    }else console.log(input);
}else console.log('Not a number');