

const create = (a1, a2) => {
    let obj = {};
    for (let x = 0; x < a1.length; x++) {
        obj[a1[x]] = a2[x];
    }
    return obj;
}

let keys = ['Ten', 'Twenty', 'Thirty'];
let values = [10, 20, 30];

console.log(create(keys, values));