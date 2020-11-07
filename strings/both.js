

const both = str => {
    let result = [];
    let arr = str.split(' ');

    for (let x in arr) {
        let letters = arr[x].match(/[a-z]/ig);
        let nums = arr[x].match(/\d+/g);

        if (letters && nums && letters.length > 0 && nums.length > 0) {
            result.push(arr[x]);
        }
    }
    return result;
}

let str1 = "Emma25 is Data scientist50 and AI Expert";

console.log(both(str1));