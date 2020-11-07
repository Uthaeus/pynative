

const sums = str => {
    let nums = [];
    let arr = str.split(' ');
    for (let x = 0; x < arr.length; x++) {
        if (+arr[x]) {
            nums.push(+arr[x]);
        }
    }
    let len = nums.length;
    let total = nums.reduce((a, b) => a += b);
    let avg = total / len;

    return `sum is ${total}\naverage is ${avg}`;
}


let str1 = "English = 78 Science = 83 Math = 68 History = 65";

console.log(sums(str1));