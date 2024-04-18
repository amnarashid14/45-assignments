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
console.log("I found a bigger table so more guests can join us");
//start of the array
guestList.unshift("Ambreen");
let midInsertion = Math.floor(guestList.length) / 2;
guestList.splice(midInsertion, 0, "Noor"); // middle of the array
for (let value of guestList) {
    console.log(value.concat(str1)); // new set of invitation
}
//announcment for inviting two peoples
console.log("Badly two persons can be invited for the dinner with  me");
// removing guests one by one  with a message for each
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Hey ${removedGuest} We cant dinner together this time. But next time InshaAllah`);
}
// message for remaining guest
guestList.forEach(remaining => console.log(`Hey ${remaining} you are still invited for dinner`));
// Emptying my Array
guestList.pop();
guestList.pop();
console.log(guestList);
export {};
