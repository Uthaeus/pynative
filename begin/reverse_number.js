

const rev = (num) => {
    let r = num.toString().split('').reverse().join('');
    return r == num.toString();
}

console.log(rev(125));
console.log(rev(121));