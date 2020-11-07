

const hyphen = str => {
    let arr = str.split('-');
    for (let x = 0; x < arr.length; x++) {
        console.log(arr[x]);
    }
}

let str1 = 'Emma-is-a-data-scientist';

hyphen(str1);