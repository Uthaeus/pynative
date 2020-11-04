

const down = num => {
    while (num > 0) {
        let temp = [];
        for (let y = 0; y < num; y++) {
            temp.push('*');
        }
        console.log(temp.join(' '));
        num--;
    }
}

down(5);