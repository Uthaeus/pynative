

const arrange = str => {
    let ups = [], downs = [];
    for (let x = 0; x < str.length; x++) {
        if (str[x] == str[x].toUpperCase()) {
            ups.push(str[x]);
        } else {
            downs.push(str[x]);
        }
    }
    let result = downs.concat(ups);
    return result.join('');
}

let str1 = 'PyNaTive';

console.log(arrange(str1));