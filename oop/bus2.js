

class Vehicle {
    constructor(name, max_speed, mileage) {
        this.name = name;
        this.max_speed = max_speed; 
        this.mileage = mileage;
    }

    seating_capacity(capacity) {
        return `The seating capacity of a ${this.name} is ${capacity} passengers`;
    }
}

class Bus extends Vehicle {

    constructor(name, max_speed, mileage, capacity = 50) {
        super(name, max_speed, mileage);
        this.capacity = capacity;
    }

    seating_capacity() {
        return super.seating_capacity(this.capacity);
    }
}


let school_bus = new Bus('School Volvo', 180, 12);

console.log(school_bus.seating_capacity());