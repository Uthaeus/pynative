

const emp = (name, sal = 9000) => {
    return `Employee ${name} salary is ${sal}`;
}


console.log(emp("Ben"));
console.log(emp("Dave", 12000));