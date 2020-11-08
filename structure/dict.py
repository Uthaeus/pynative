

def dic(arr):
    obj = {}

    for x in arr:
        temp = obj.get(x)
        if temp:
            obj[x] += 1
        else:
            obj[x] = 1

    return obj 


a = [11, 45, 8, 11, 23, 45, 23, 45, 89]

print(dic(a))