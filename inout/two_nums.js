const prompt = require('prompt-sync')({sigint: true});


const two = () => {
    let a = prompt('Enter first number: ');
    let b = prompt('Enter second number: ');
    let result = +a + +b;
    console.log(`Your sum is: ${result}`);
}

two();