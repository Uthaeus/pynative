

let sampleDict = {
    "name": "Kelly",
    "age":25,
    "salary": 8000,
    "city": "New york"
    
};

let keysToRemove = ["name", "salary"];

for (let x in keysToRemove) {
    if (sampleDict[keysToRemove[x]]) {
        delete sampleDict[keysToRemove[x]];
    }
}


console.log(sampleDict);