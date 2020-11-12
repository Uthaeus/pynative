

const getMin = obj => {
    let m = Math.min(...Object.values(obj));
    for (let item in obj) {
        if (obj[item] == m) {
            return item;
        }
    }
}

let sampleDict = {
    'Physics': 82,
    'Math': 65,
    'history': 75
  };

console.log(getMin(sampleDict));