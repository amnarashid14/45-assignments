function createCar(manufacturer, model, ...properties) {
    let car = {
        manufacturer,
        model,
    };
    for (let [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
let myCar = createCar('Toyota', 'Corolla', ['color', 'red'], ['transmission', 'automatic]']);
console.log(myCar);
export {};
