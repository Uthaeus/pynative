

const recur = (arr, num) => {
    if (num == 0) {
        return 0;
    } else {
        return arr[num] + recur(arr, num - 1);
    }
}


let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(recur(a, 10));