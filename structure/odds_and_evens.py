

def combine(a1, a2):
    x = 0
    odds = []
    evens = []

    while x < len(a1) and x < len(a2):
        if x % 2 != 0:
            if a1[x]:
                odds.append(a1[x])
        else:
            if a2[x]:
                evens.append(a2[x])

    return odds + evens 

listOne = [3, 6, 9, 12, 15, 18, 21]
listTwo = [4, 8, 12, 16, 20, 24, 28]


print(combine(listOne, listTwo))