

const fib = () => {
    let result = [0, 1];

    while (result.length < 11) {
        let temp = result[result.length - 2] + result[result.length - 1];
        result.push(temp);
    }

    console.log("Fibonacci sequence:");
    console.log(result.join(' '));
}


fib();