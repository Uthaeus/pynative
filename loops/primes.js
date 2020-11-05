

const primes = (start, end) => {
    let result = [];

    for (let x = start; x <= end; x++) {
        if (isPrime(x)) {
            result.push(x);
        }
    }
    for (let a in result) {
        console.log(result[a]);
    }
}

const isPrime = num => {
    if (num > 1) {
        for (let y = 2; y < num; y++) {
            if (num % y == 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}


primes(25, 50);