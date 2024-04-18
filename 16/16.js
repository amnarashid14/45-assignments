let guestList = ["Saman", "Marium", "Amna"];
let str1 = " You are Invited For Tomorrow's Event.";
let i = 0;
while (i < guestList.length) {
    console.log(guestList[i].concat(str1));
    i++;
}
//print statement to removed person
console.log(`${guestList[1]} can't attent the event.`);
// inserting in place of removed one
let newList = guestList.splice(1, 1, "Hooria");
// Invites for new list
let g = 0;
while (g < guestList.length) {
    console.log(guestList[g].concat(str1));
    g++;
}
console.log("I found a bigger table so more guests can join us");
//inserting at start of the array
guestList.unshift("Ambreen");
// starting in mid of the array
let midInsertion = Math.floor(guestList.length) / 2;
guestList.splice(midInsertion, 0, "Noor"); // middle of the array
// new set of invitation
for (let value of guestList) {
    console.log(value.concat(str1));
}
export {};
