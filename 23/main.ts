// Conditional Tests: 




let umbrellaColor :string= 'Red';


console.log("Is umbrellaColor == 'RED' ? I predict True ");
console.log(umbrellaColor == 'RED');//false

console.log("Is umbrellaColor.length > 4 ? I predict True ");
console.log(umbrellaColor.length >= 4);// false

console.log("Is umbrellaColor == 'red' ? I predict True ");
console.log(umbrellaColor ==' red');// false due to case=sensitive

console.log("Is typeof umbrellaColor === 'boolean' ? I predict True ");
console.log(typeof umbrellaColor === 'boolean' );//false

console.log("Is umbrellaColor == 'rEd' ? I predict True ");
console.log(umbrellaColor == 'rEd');//false

// true predicted conditions
console.log("Is umbrellaColor == 'Red' ? I predict True ");
console.log(umbrellaColor == 'Red');//true due to same value as well in same case

console.log("Is umbrellaColor != 'Blue' ? I predict True ");
console.log(umbrellaColor != 'Blue');//true

console.log("Is typeof umbrellaColor == 'string' ? I predict True ");
console.log(typeof umbrellaColor === 'string');//true

console.log("Is umbrellaColor.length <= 3? I predict True ");
console.log(umbrellaColor.length == 3); // true length=2

console.log("Is umbrellaColor.length == 3 ? I predict True ");
console.log(umbrellaColor.length == 3 );//true

