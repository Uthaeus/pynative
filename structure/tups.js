

const tups = (arr1, arr2) => {
    let result = [];

    for (let x = 0; x < arr1.length; x++) {
        let temp = (arr1[x], arr2[x]);
        result.push(temp);
    }
    return result;
}

let a = [2, 3, 4, 5, 6, 7, 8];
let b = [4, 9, 16, 25, 36, 49, 64];

console.log(tups(a, b));