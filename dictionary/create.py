

def create(a1, a2):
    x = 0
    obj = {}

    while x < len(a1):
        obj[a1[x]] = a2[x]
        x += 1
    return obj 

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

print(create(keys, values))