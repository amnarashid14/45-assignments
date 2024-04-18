"use strict";
//More Conditional Tests
Object.defineProperty(exports, "__esModule", { value: true });
let androidPhone = 'Samsung';
// • Tests for equality and inequality with strings
console.log('Is androidPhone == "Infinix" ? I predict true?');
console.log(androidPhone == 'Infinix'); // false
console.log('Is androidPhone != "Infinix" ? I predict true?');
console.log(androidPhone != 'Infinix'); // true
// • Tests using the lower case function
console.log('Is androidPhone == "samsung" ? I predict true?');
console.log(androidPhone == 'samsung'); // false
console.log('Is androidPhone == "Samsung" ? I predict true?');
console.log(androidPhone == 'Samsung'); // false
let kiloByte = '1024Bytes';
//not equal to
console.log('Is kiloByte != "1024KiloBytes" ? I predict true?');
console.log(kiloByte != '1024KiloBytes'); //true
//equal to
console.log('Is kiloByte == "1024Bytes" ? I predict true?');
console.log(kiloByte == '1024Bytes'); //true
//greater than
console.log('Is kiloByte > 1024bits ? Ipredict True');
console.log(kiloByte > '666Bytes');
//less than
console.log('Is kiloByte < "7487Bytes"? I predict True');
console.log(kiloByte < '7487Bytes');
//greater than and equal to
console.log('Is kiloByte >= 1024Bytes ? Ipredict True');
console.log(kiloByte >= '1024Bytes');
//less than or equal to
console.log('Is kiloByte <= "943Bytes" ? Ipredict True');
console.log(kiloByte <= '943Bytes');
// • Tests using "and" and "or" operators
// In terms of Bits
let megaByte = '1073741824';
let oneKiloByte = '1048576';
//Using OR
console.log('Is One MB is equal to or greater than One KB', (megaByte == oneKiloByte) || (megaByte > oneKiloByte));
console.log('Is One KB is less than or not equal to  One MB', (oneKiloByte == megaByte) && (oneKiloByte > megaByte));
// • Test whether an item is in a array
let array = [10, 45, 24];
for (let value of array) {
    console.log('Is  45 is present in array ? I predict true?');
    console.log(value === 45);
}
