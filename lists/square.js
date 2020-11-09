

const square = arr => {
    return arr.map(a => Math.pow(a, 2));
}

let aList = [1, 2, 3, 4, 5, 6, 7];

console.log(square(aList));