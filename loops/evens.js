

const evens = arr => {
    let result = [];
    for (let x = 0; x < arr.length; x++) {
        if (x % 2 != 0) {
            result.push(arr[x]);
        }
    }
    return result.join(' ');
}


let my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(evens(my_list));