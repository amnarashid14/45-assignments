"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let array = ["honda", "civic", "abc", "bcd", "efg"];
for (let trans of array) {
    document.write(`I would like to own a ${trans}  motorcycle`, "</br>");
}