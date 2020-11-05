

const fives = arr => {
    for (let x in arr) {
        if (arr[x] > 150) {
            break;
        } else if (arr[x] % 5 == 0) {
            console.log(arr[x]);
        }
    }
}

let list1 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200];

fives(list1);