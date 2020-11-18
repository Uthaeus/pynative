

class Vehicle {
    constructor(max_speed, mileage) {
        this.max_speed = max_speed;
        this.mileage = mileage;
    }
}

let modelX = new Vehicle(240, 18);

console.log(modelX.max_speed, modelX.mileage);