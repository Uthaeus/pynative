const prompt = require('prompt-sync')({siginit: true});

const sums = () => {
    let num = prompt('Enter a number: ');
    let total = 0;
    for (let x = 1; x <= num; x++) {
        total += x;
    }
    console.log(`Your sum for ${num} is:  ${total}`);
}


sums();