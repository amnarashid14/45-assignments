

let magiciansName :string[]=['Harry Houdini','David Copperfield','Criss Angel','David Blaine','Penn & Teller']

function show_magicians(magiciansName :string[]):void {
    
    // for printing each seperate name
    for (let magName of magiciansName){
        
        console.log(magName);

    }
}

// function invoke with array as parameter
show_magicians( magiciansName)

