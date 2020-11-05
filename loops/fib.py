

def fib():
    result = [0, 1]

    while len(result) < 11:
        temp = result[-2] + result[-1]
        result.append(temp)

    s = map(lambda x: str(x), result)

    print('Fibonacci sequence:')
    print(" ".join(s))

fib()