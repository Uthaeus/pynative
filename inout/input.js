const prompt = require('prompt-sync')({sigint: true});

const inputter = () => {
    let result = [];
    for (let x = 0; x < 5; x++) {
        let temp = prompt('Enter a number: ');
        result.push(temp);
    }
    return result;
}

console.log(inputter());