let sandwich;
function makeSandwich(...sandwich) {
    // rest par syntax
    console.log(`For Making a sandwiche folliwng Ingredients are required:`);
    for (let Ingredients of sandwich) {
        console.log(Ingredients);
    }
}
makeSandwich('breads', 'Tomato', 'Egg', 'Cucumber', 'Mayo');
makeSandwich('Chicken', 'Ketchup');
makeSandwich('lettuce', 'Cheese');
export {};
