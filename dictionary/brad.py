

def brad(d):
    for x in d:
        if d[x]['name'] == 'Brad':
            d[x]['salary'] = 8500
    return d   

sampleDict = {
     'emp1': {'name': 'Jhon', 'salary': 7500},
     'emp2': {'name': 'Emma', 'salary': 8000},
     'emp3': {'name': 'Brad', 'salary': 6500}
}

print(brad(sampleDict))