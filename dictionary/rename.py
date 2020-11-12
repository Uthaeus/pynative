

def rename(d):
    d['location'] = d.pop('city')
    print(d)


sampleDict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}


rename(sampleDict)