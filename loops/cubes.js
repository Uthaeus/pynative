

const cubes = num => {
    for (let x = 1; x <= num; x++) {
        let cube = Math.pow(x, 3);
        console.log(`Current Number is: ${x} and the Cube is ${cube}`);
    }
}

cubes(5);