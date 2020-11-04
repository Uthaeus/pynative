

const echo = num => {
    for (let x = 1; x <= num; x++) {
        let temp = [];
        for (let y = 0; y < x; y++) {
            temp.push(x);
        }
        console.log(temp.join(' '));
    }
}

echo(5);