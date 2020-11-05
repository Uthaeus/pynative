

const done = (num) => {
    for (let x = 0; x < num; x++) {
        console.log(x);
        if (x == num - 1) console.log('Done!');
    } 
}


done(5)