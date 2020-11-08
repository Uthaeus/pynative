

const dict = arr => {
    let obj = {};

    for (let x in arr) {
        if (obj[arr[x]]) {
            obj[arr[x]]++;
        } else {
            obj[arr[x]] = 1;
        }
    }
    return obj;
}

let a = [11, 45, 8, 11, 23, 45, 23, 45, 89];

console.log(dict(a));