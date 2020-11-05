

const down = num => {
    let arr = [];
    for (let x = num; x > 0; x--) {
        arr.push(x);
    }
    for (; arr.length > 0;) {
        console.log(arr.join(' '));
        arr.shift();
    }

}


down(5);