const prompt = require('prompt-sync')({siginit: true});

const table = () => {
    let num = prompt("Enter a number: ");

    for (let x = 1; x <= 10; x++) {
        console.log(+num * x);
    }
}


table();