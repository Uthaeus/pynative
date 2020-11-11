

let sampleDict = {
    "name": "Kelly",
    "age":25,
    "salary": 8000,
    "city": "New york"  
};

let keys = ['name', 'salary'];

let myDict = {};
for (let x in keys) {
    if (sampleDict[keys[x]]) {
        myDict[keys[x]] = sampleDict[keys[x]];
    }
}

console.log(myDict);