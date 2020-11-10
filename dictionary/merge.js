

const merge = (obj1, obj2) => {
    for (let x in obj2) {
        if (obj1[x]) {
            continue;
        } else {
            obj1[x] = obj2[x];
        }
    }
    return obj1;
}

let dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30};
let dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50};

console.log(merge(dict1, dict2));