

const integers = str => {
    let nums = str.match(/\d+/g);

    return +nums.join('');
}


let s = "I am 25 years and 10 months old";

console.log(integers(s));