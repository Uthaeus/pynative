

const iterater = () => {
    let previous_num = 0;
    console.log("Printing current and previous number sum in a given range(10)");

    for (let x = 0; x < 10; x++) {
        console.log(`Current Number ${x} Previous Number ${previous_num}  Sum:  ${x + previous_num}`);
        previous_num = x;
    }
}

iterater();