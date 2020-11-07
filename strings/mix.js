

const mix = (s1, s2) => {
    let result = '';
    let len = Math.max(s1.length, s2.length);
    s2 = s2.split('').reverse().join('');

    for (let x = 0; x < len; x++) {
        if (s1[x]) {
            let temp = s1[x] + s2[x];
            result += temp;
        } else {
            result += s2.slice(x);
            break;
        }
    }
    return result;
}

let s1 = "Abc";
let s2 = "Xyz";

console.log(mix(s1, s2));