"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Saman", "Marium", "Amna"];
let str1 = " You are Invited For Tomorrow's Event.";
let i = 0;
while (i < guestList.length) {
    console.log(guestList[i].concat(str1));
    i++;
}
//print statement to removed person
console.log(`${guestList[1]} can't attent the event.`);
//removing the person
let newList = guestList.splice(1, 1, "Hooria");
// Invites for new list
let g = 0;
while (g < guestList.length) {
    console.log(guestList[g].concat(str1));
    g++;
}
