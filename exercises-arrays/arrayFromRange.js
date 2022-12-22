const numbers = arrayFromRange(-1, 3);

console.log(numbers);

function arrayFromRange(min, max){
const parametro = [];
for(let i = min; i <= max; i++)
    parametro.push(i);
return parametro

}