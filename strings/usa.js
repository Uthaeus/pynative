

const usa = str => {
    let count = str.match(/usa/ig).length
    return `The USA count is: ${count}`;
}

let str1 = "Welcome to USA. usa awesome, isn't it?";

console.log(usa(str1));