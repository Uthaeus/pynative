

const doit = arr => {
    let sampleDict ={'Jhon':47, 'Emma':69, 'Kelly':76, 'Jason':97};
    let result = [];

    for (let x in arr) {
        if (Object.values(sampleDict).includes(arr[x])) {
            result.push(arr[x]);
        }
    }
    return result;
}

let rollNumber = [47, 64, 69, 37, 76, 83, 95, 97];

console.log(doit(rollNumber));