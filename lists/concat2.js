

const cat = (a1, a2) => {
    let result = [];

    for (let x in a1) {
        for (let y in a2) {
            let temp = a1[x] + a2[y];
            result.push(temp);
        }
    }
    return result;
}

let list1 = ["Hello ", "take "];
let list2 = ["Dear", "Sir"];

console.log(cat(list1, list2));