

const rev_int = num => {
    return +num.toString().split('').reverse().join('')
}


console.log(rev_int(2345));