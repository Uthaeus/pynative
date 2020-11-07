

const empty = arr => {
    let result = [];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] && arr[x].length > 0) {
            result.push(arr[x]);
        }
    }
    return result;
}

let str_list = ["Emma", "Jon", "", "Kelly", undefined, "Eric", ""];

console.log(empty(str_list));