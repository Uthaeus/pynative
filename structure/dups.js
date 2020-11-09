

const dups = (a1, a2) => {
    let result = [];

    for (let x in a1) {
        if (!a2.includes(a1[x])) {
            result.push(a1[x]);
        }
    }
    return result;
}

let a = [65, 42, 78, 83, 23, 57, 29];
let b = [67, 73, 43, 48, 83, 57, 29];

console.log(dups(a, b));