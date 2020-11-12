

def getMin(d):
    return min(d, key=d.get)

sampleDict = {
  'Physics': 82,
  'Math': 65,
  'history': 75
}

print(getMin(sampleDict))