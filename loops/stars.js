

const stars = num => {
    let a = [], b = [];
    for (let x = 1; x <= num; x++) {
        a.push(x);
        if (x < num) {
            b.push(x);
        }
    }
    let nums = a.concat(b.reverse());

    for (let x in nums) {
        let temp = [];
        let y = 0;
        while (y < nums[x]) {
            temp.push('*');
            y++;
        }
        console.log(temp.join(' '));
    }
}


stars(5);