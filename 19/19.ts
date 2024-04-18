

let guestListNumbers = ["Saman", "Marium", "Amna"];
let stringInserted = " You are Invited For Tomorrow's Event.";

let f = 0;

// printing index numbers
while (f < guestListNumbers.length) {
    console.log(guestListNumbers[f].concat(stringInserted));
    f++;
}

// printing guests name
for (let value in guestListNumbers){
    console.log( value + stringInserted);
}

console.log(`Total Number of guest that are invited: ${guestListNumbers.length}`);

