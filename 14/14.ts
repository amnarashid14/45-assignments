// list of guests
let guestList :string[]= ["Saman", "Marium", "Amna"];

let str1 :string= " You are Invited For Tomorrow's Event.";

let i = 0;
while (i < guestList.length) {
    console.log(guestList[i].concat(str1));
    i++;
}
