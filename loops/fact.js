

const fact = n => {
    let total = 1;
    for (let x = 1; x <= n; x++) {
        total *= x;
    }
    return total;
}

console.log(fact(5));