

const twenty = arr => {
    let ind = arr.indexOf(20);

    if (ind) arr[ind] = 200;

    return arr;
}


let list1 = [5, 10, 15, 20, 25, 50, 20];


console.log(twenty(list1));