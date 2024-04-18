"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansName = ['Harry Houdini', 'David Copperfield', 'Criss Angel', 'David Blaine', 'Penn & Teller'];
// function of make_great (def)
function make_great(magiciansName) {
    // for printing each seperate name
    for (let magName of magiciansName) {
        console.log(` "The Great ,${magName}"`);
    }
}
// function invoke with array as parameter
make_great(magiciansName);
