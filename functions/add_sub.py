

def add_sub(a, b):
    result = []
    result.append(str(a + b))
    result.append(str(a - b))
    return " ".join(result)


print(add_sub(40, 10))