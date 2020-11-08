

const move = arr => {
    let first = arr.slice(0, 4).concat(arr.slice(5));
    let result = first.slice(0, 2).concat([arr[4]]).concat(first.slice(2)).concat([arr[4]]);

    return result;
}

let a = [34, 54, 67, 89, 11, 43, 94];


console.log(move(a));