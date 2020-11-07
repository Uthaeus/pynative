

const char_count = str => {
    let obj = {};

    for (let x in str) {
        if (obj[str[x]]) {
            obj[str[x]]++;
        } else {
            obj[str[x]] = 1;
        }
    }

    return obj;
}

let str1 = "Apple";

console.log(char_count(str1));