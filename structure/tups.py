

def tups(arr1, arr2):
    result = []
    x = 0

    while x < len(arr1):
        temp = (arr1[x], arr2[x])
        result.append(temp)
        x += 1

    return result 

a1 = [2, 3, 4, 5, 6, 7, 8]
a2 = [4, 9, 16, 25, 36, 49, 64]

print(tups(a1, a2))