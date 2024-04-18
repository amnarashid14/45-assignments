

let magiciansName :string[]=['Harry Houdini','David Copperfield','Criss Angel','David Blaine','Penn & Teller']

let orgArray=magiciansName; // without changing array 
// without modification array 
function show_magicians(magiciansName :string[])  {
    
    // for printing each seperate name
    for (let magName of magiciansName){
        
        console.log(magName);

    }
}

console.log('-----------');

// function invoke with original array as parameter
show_magicians( orgArray)


// function after modification (def)
function make_great(magiciansName :string[])// :string
 {
         return magiciansName.map(magiciansName=> `The Great ${magiciansName}`)

    }
// storing make_great func into var for getting output and use slice for making copyof array 
    let greatMagician=make_great(orgArray.slice());

    show_magicians(greatMagician)


