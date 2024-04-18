

let admin:string[] = ['elen', 'zurrab', 'admin', 'hooria', 'noor'];

for (let value of admin) {

    if (value === 'admin') {
        console.log(`Hello ${value}, would you like to see a status report? `)
    }
    else {
        console.log(`Hello ${value}, Thank You For Logging Again \n`);

    }

}
