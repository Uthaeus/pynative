

const cat = (a1, a2) => {
    let result = [];
    for (let x = 0; x < a1.length; x++) {
        let temp = a1[x] + a2[x];
        result.push(temp);
    }
    return result;
}

let list1 = ["M", "na", "i", "Ke"];
let list2 = ["y", "me", "s", "lly"];

console.log(cat(list1, list2));
