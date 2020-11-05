

const sums = num => {
    let result = [];
    for (let x = 1; x <= num; x++) {
        let temp = '2'.repeat(x);
        result.push(+temp);
    }

    return result.reduce((a, b) => a += b);
}


console.log(sums(5));