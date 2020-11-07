

const balance = (s1, s2) => {
    for (let x in s1) {
        if (!s2.includes(s1[x])) {
            return false;
        }
    }
    return true;
}

let s1 = "Yn";
let s2 = "PYnative";

let s3 = "Ynf";
let s4 = "PYnative";

console.log(balance(s1, s2));
console.log(balance(s3, s4));