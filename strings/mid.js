

const mid = str => {
    let m = Math.floor((str.length / 2) - 1)
    let result = str.slice(m, m + 3);

    return result;
}


console.log(mid('JaSonAy'));