

let magiciansName :string[]=['Harry Houdini','David Copperfield','Criss Angel','David Blaine','Penn & Teller']


// function of make_great (def)
function make_great(magiciansName :string[]):void {
    
    // for printing each seperate name
    for (let magName of magiciansName){
        
        console.log(` "The Great ,${magName}"`);

    }
}

// function invoke with array as parameter
make_great( magiciansName)

