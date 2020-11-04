

const emma = str => {
    let count = 0;
    let arr = str.split(' ');

    for (let x in arr) {
        if (arr[x] == 'Emma') {
            count++;
        }
    }
    return `Emma appeared ${count} times`;
}


let text1 = 'Emma is a good developer. Emma is a writer';
let text2 = 'This does not contain the word';

console.log(emma(text1));
console.log(emma(text2));