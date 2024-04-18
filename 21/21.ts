//storing some thin in typescript object

interface  personalInformation {

    name:string;
    fatherName:string;
    age:number;
    DOB: Date;
    contact:number;
    address: string;
}

let personalInformation: any={
    name:'Amna',
    fatherName:'M. Rashid',
    age:'24',
    DOB:'12 12 2000',
    contact:'03001234567',
    address:'Azizabad Karachi',
} 


console.log(personalInformation)
