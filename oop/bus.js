

class Vehicle {
    constructor(name, max_speed, mileage) {
        this.name = name;
        this.max_speed = max_speed;
        this.mileage = mileage;
    }
}

class Bus extends Vehicle {
    constructor(name, max_speed, mileage) {
        super(name, max_speed, mileage);
    }
}

let school_bus = new Bus('School Volvo', 180, 12);

console.log('Vehicle Name:', school_bus.name);