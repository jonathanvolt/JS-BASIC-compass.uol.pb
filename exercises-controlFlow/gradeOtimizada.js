const marks = [80, 100, 100];
// 1-59 = F; 60-69 = D; etc

calculateGrade(marks);

function calculateAvarage(array){
    let valor= 0;
    for (let value of array)
        valor += value;
        return valor / array.length;
}  

function calculateGrade(marks){
    const media = calculateAvarage(marks);
if (media < 60) console.log('F');
if (media >= 60 && media <=69) console.log('D');
if (media >= 70 && media <=79) console.log('C');
if (media >= 80 && media <=89) console.log('B');
else console.log('A');
//console.log(media)
}

