

const descend = arr => {
    return arr.sort((a, b) => b - a);
}

let aLsit = [100, 200, 300, 400, 500];

console.log(descend(aLsit));