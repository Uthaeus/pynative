

const stuff = arr => {
    let a = [...arr];
    let uniques = [];

    while (a.length > 0) {
        let temp = a.shift();
        if (!a.includes(temp) && !uniques.includes(temp)) {
            uniques.push(temp);
        }
    }

    console.log('Uniques: ', uniques.join(' '));
    console.log('\n');
    console.log('min: ', Math.min(...arr));
    console.log('max: ', Math.max(...arr));
}


let sampleList = [87, 52, 44, 53, 54, 87, 52, 53];

stuff(sampleList);