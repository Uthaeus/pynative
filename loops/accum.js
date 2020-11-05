

const accum = num => {
    let result = [];
    for (let x = 1; x <= num; x++) {
        result.push(x)
        console.log(result.join(' '));
    }
}

accum(5);