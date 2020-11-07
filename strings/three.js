

const three = (s1, s2) => {
    let result = '';
    for (let x = 0; x < 3; x++) {
        if (x == 0) {
            result += s1[0];
            result += s2[0];
        } else if (x == 1) {
            let m = Math.floor(s1.length / 2);
            result += s1[m];
            m = Math.floor(s2.length / 2);
            result += s2[m];
        } else if (x == 2) {
            result += s1[s1.length - 1];
            result += s2[s2.length - 1];
        }
    }
    return result;
}


let s1 = "America";
let s2 = "Japan";


console.log(three(s1, s2));