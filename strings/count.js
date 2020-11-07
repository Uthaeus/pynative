

const counter = str => {
    let chars = str.match(/[a-zA-Z]/ig).length;
    let digits = str.match(/[0-9]/g).length;
    let syms = str.length - (chars + digits);

    return `Total counts of chars, digits, and symbols\n\nChars = ${chars}\nDigits = ${digits}\nSymbols = ${syms}`;
}


let str1 = "P@#yn26at^&i5ve";

console.log(counter(str1));