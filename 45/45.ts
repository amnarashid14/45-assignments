

function createCar(manufacturer: string , model: string, ...properties: [string,string][]):object{
 let car: any={
    manufacturer,
    model,
 }
 for (let [key , value] of properties){
car[key]=value;
 }
 return car;
}

let myCar=createCar('Toyota','Corolla',['color','red'],['transmission','automatic]']);

console.log(myCar)


