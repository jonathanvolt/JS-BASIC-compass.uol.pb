showStars(12);

function showStars(rows){
    
    for(let i=1; i<=rows; i++ ){
        let a=' ';
        for(let j = 0; j<i ; j++)
        a += '*'
      console.log(a);
    }
    
}