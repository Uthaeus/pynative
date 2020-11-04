

const table = () => {
    let hor = [];
    for (let x = 1; x < 11; x++) {
        hor.push(x);
    }

    console.log(hor.join('  '));

    for (let x = 1; x < 10; x++) {
        let temp = [];
        for (let y = 0; y < 10; y++) {
            if (y == 0) {
                temp.push(hor[x]);
            } else {
                temp.push(temp[0] * hor[y]);
            }
        }
        console.log(temp.join('  '));
    }
}

table();