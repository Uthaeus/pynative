

const displayStudent = (name, age) => {
    console.log(name, age);
}

let showStudent = displayStudent;


showStudent('Beth', 32);
displayStudent('Mark', 33);