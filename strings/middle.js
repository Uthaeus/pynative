

const middle = (s1, s2) => {
    let m = Math.floor(s1.length / 2);
    let [pre, post] = [s1.slice(0, m), s1.slice(m)];

    return pre + s2 + post;
}

let s1 = "Ault";
let s2 = "Kelly";

console.log(middle(s1, s2));