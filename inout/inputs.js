const prompt = require('prompt-sync')({siginit: true});

const inputs = () => {
    let result = [];

    console.log('Enter three strings');
    for (let x = 0; x < 3; x++) {
        let temp = prompt("");
        result.push(temp);
    }

    for (let x = 0; x < result.length; x++) {
        console.log(result[x]);
    }
}

inputs();