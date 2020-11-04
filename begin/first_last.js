

const first_last = arr => {
    return arr[0] == arr[arr.length - 1];
}


let l1 = [10, 20, 30, 40, 10];
let l2 = [10, 20, 30, 40, 50];

console.log(first_last(l1));
console.log(first_last(l2));