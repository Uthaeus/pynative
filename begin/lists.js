

const lists = (arr1, arr2) => {
    let result = [];

    for (let x in arr1) {
        if (arr1[x] % 2 != 0) {
            result.push(arr1[x]);
        }
    }
    for (let x in arr2) {
        if (arr2[x] % 2 == 0) {
            result.push(arr2[x]);
        }
    }

    return result;
}

let a = [10, 20, 23, 11, 17];
let b = [13, 43, 24, 36, 12];

console.log(lists(a, b));