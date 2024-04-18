
let ordinalNumbers:number[]=[1,2,3,4,5,6,7,8,9];

for (let value of ordinalNumbers){
    if(value === 1 ){
        console.log(value + 'st');        
    }
    else  if(value === 2 ){
        console.log(value + 'nd');        
    }
    else  if(value === 3 ){
        console.log(value + 'rd');        
    }
    else{
        console.log(value + 'th');        
    }
}