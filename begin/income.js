

const income = num => {
    let amt;
    if (num <= 10000) {
        amt = 0;
    } else if (num <= 20000) {
        amt = (num - 10000) * 0.1;
    } else {
        let a = 10000 * 0.1;
        let b = (num - 20000) * 0.2;
        amt = a + b;
    }
    return `$${amt}`;
}


console.log(income(45000));