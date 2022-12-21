
showNumbers(12);

function showNumbers(limit){
    for (let i=0; i<=limit; i++){
        if (i%2 === 0 )
         tipo = '"EVEN"';
         else tipo = '"ODD"'
        console.log(i +' ' + tipo);
    }

}