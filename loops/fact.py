

def fact(n):
    result = reduce(lambda a, b: a * b, range(1, n + 1))
    return result 


print(fact(5))