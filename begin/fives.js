

const fives = arr => {
    for (let x in arr) {
        if (arr[x] % 5 == 0) {
            console.log(arr[x]);
        }
    }
}

let a = [10, 20, 33, 46, 55];

fives(a);