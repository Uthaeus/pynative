

const evens = () => {
    let result = [];
    for (let x = 4; x < 31; x++) {
        if (x % 2 == 0) {
            result.push(x);
        }
    }
    return result;
}


console.log(evens());