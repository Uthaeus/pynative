

const rename = obj => {
    obj['location'] = obj['city'];
    delete obj['city'];
    return obj;
}


let sampleDict = {
    "name": "Kelly",
    "age":25,
    "salary": 8000,
    "city": "New york"
  };

console.log(rename(sampleDict));