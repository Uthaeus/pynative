

const combine = (a1, a2) => {
    let odds = [], evens = [];
    let len = Math.max(a1.length, a2.length);

    for (let x = 0; x < len; x++) {
        if (x % 2 == 0) {
            if (a2[x]) {
                evens.push(a2[x]);
            }
        } else {
            if (a1[x]) {
                odds.push(a1[x]);
            }
        }
    }
    return odds.concat(evens);
}


let listOne = [3, 6, 9, 12, 15, 18, 21];
let listTwo = [4, 8, 12, 16, 20, 24, 28];


console.log(combine(listOne, listTwo));