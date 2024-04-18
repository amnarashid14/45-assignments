"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// list of guests
let guestList = ["Saman", "Marium", "Amna"];
let str1 = " You are Invited For Tomorrow's Event.";
let i = 0;
while (i < guestList.length) {
    console.log(guestList[i].concat(str1));
    i++;
}
