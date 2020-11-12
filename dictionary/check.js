

const check = obj => {
    return Object.values(obj).includes(200);
}

let sampleDict = {'a': 100, 'b': 200, 'c': 300};

console.log(check(sampleDict));