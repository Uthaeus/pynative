

let employees = ['Kelly', 'Emma', 'John'];
let defaults = {"designation": 'Application Developer', "salary": 8000};
let myObj = {};

for (let x = 0; x < employees.length; x++) {
    myObj[employees[x]] = defaults;
}

console.log(myObj);
console.log(myObj['Kelly']);