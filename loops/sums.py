

def sums(n):
    result = []
    for x in range(1, n + 1):
        temp = str(2) * x
        result.append(int(temp))

    return reduce(lambda a, b: a + b, result)


print(sums(5))