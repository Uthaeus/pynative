

const twenty = arr => {
    arr = arr.filter(a => a != 20);
    return arr;
}


let list1 = [5, 20, 15, 20, 25, 50, 20];

console.log(twenty(list1));