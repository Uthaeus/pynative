

const vals = obj => {
    let result = [];

    for (let item in obj) {
        if (!result.includes(obj[item])) {
            result.push(obj[item]);
        }
    }

    return result;
}


let speed ={'jan':47, 'feb':52, 'march':47, 'April':44, 'May':52, 'June':53, 'july':54, 'Aug':44, 'Sept':54};

console.log(vals(speed));