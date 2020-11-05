

def evens():
    result = []
    for x in range(4, 31):
        if x % 2 == 0:
            result.append(x)
    return result 


print(evens())