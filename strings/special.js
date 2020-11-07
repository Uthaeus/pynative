

const special = str => {
    let result = [];
    let arr = str.split(' ');

    for (let x in arr) {
        let temp = arr[x].match(/[a-zA-Z0-9]/g);
        if (temp && temp.length > 0) {
            result.push(temp.join(''));
        }
    }
    return result.join(' ');
}


let str1 = "/*Jon is @developer & musician";

console.log(special(str1));