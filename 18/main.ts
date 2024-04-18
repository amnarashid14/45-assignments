// array of fav places

let favPlaces:string[] = ["Muree", "Island", "Tag Mehal", "Dubai", "Saudia Arabia"];

console.log('Original Array:', favPlaces,' \n');// array in original order

let alpahabeticalArranged :string[]= [...favPlaces].sort();// sorted array

console.log('Original Array after alphabetically arrangment:',favPlaces,'\n');// array in original order

let reversedArray :string[]= [...alpahabeticalArranged].reverse();// array in reversed alphabetical order


console.log('Original After reversed arrangment:', favPlaces,'\n');// array in original order

console.log("Arranged in Alphabetical Order:" ,alpahabeticalArranged," \n");// sorted array

console.log("Reversed order array: ",reversedArray," \n");


