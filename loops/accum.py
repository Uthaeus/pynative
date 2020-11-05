

def accum(n):
    rng = range(1, n + 1)
    result = []
    for x in rng:
        result.append(str(x))
        print(' '.join(result))


accum(5)