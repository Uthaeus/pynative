

def dups(a1, a2):
    result = []
    for x in a1:
        if x not in a2:
            result.append(x)

    return result 


a = [65, 42, 78, 83, 23, 57, 29]
b = [67, 73, 43, 48, 83, 57, 29]


print(dups(a, b))