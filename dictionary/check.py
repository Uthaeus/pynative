

def check(d):
    for x in d:
        if d[x] == 200:
            return True 


sampleDict = {'a': 100, 'b': 200, 'c': 300}


print(check(sampleDict))