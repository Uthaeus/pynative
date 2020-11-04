

def lists(l1, l2):
    result = []
    for x in l1:
        if x % 2 != 0:
            result.append(x)
    for x in l2:
        if x % 2 == 0:
            result.append(x)

    return result 


a = [10, 20, 23, 11, 17]
b = [13, 43, 24, 36, 12]

print(lists(a, b))