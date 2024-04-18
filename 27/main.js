import inquirer from "inquirer";
let alien_color = await inquirer.prompt({
    name: 'alienColor',
    type: 'list',
    choices: ['Red', 'Green', 'Yellow'],
    message: 'Select A color For Alien',
});
//1st Version Red Block
if (alien_color.alienColor === 'Red') {
    console.log('You Have Earned 15 points for shooting Red Alien');
}
// 2nd version Green Block
else if (alien_color.alienColor === 'Green') {
    console.log('You Have Earned 5 points for shooting Green Alien');
}
// 3rd Block Yellow Version
else if (alien_color.alienColor === 'Yellow') {
    console.log('You Have Earned 10 points for shooting Yellow Alien');
}
