

def check(arr):
    sampleDict = {'Jhon':47, 'Emma':69, 'Kelly':76, 'Jason':97}
    result = []

    for i in arr:
        for x in sampleDict:
            if sampleDict[x] == i:
                result.append(i)
    return result 

rollNumber = [47, 64, 69, 37, 76, 83, 95, 97]

print(check(rollNumber))