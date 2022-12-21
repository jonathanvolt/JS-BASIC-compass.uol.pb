
const marks = [90, 100, 95];
// 1-59 = F; 60-69 = D; etc

calculateGrade(marks);

function calculateGrade(marks){
    media = (marks[0] + marks[1] + marks[2])/3
    
    if (media <= 59)
     console.log('F');
    else if (media <= 69)
    console.log('D');
   else if (media <= 79)
   console.log('C');
  else if(media <= 89)
  console.log('B');
 else console.log('A');
 
}  
