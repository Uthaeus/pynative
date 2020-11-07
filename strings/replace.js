

const rep = str => {
    let temp = str.replace(/[/*@&!]/g, '#');
    return temp;
}

let str1 = '/*Jon is @developer & musician!!';

console.log(rep(str1));