

const thirds = arr => {
    let third = Math.floor(arr.length / 3);
    
    for (let x = 0; x < 3; x++) {
        if (x == 0) {
            let first = arr.slice(0, third).reverse();
            console.log(first);
        } else if (x == 1) {
            let second = arr.slice(third, third * 2).reverse();
            console.log(second);
        } else {
            let three = arr.slice(third * 2).reverse();
            console.log(three);
        }
    }
}

let a = [11, 45, 8, 23, 14, 12, 78, 45, 89];

thirds(a);