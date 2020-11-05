

def down(n):
    rng = map(lambda a: str(a), range(1, n + 1)[::-1])

    for x in range(len(rng)):
        print(" ".join(rng))
        rng.pop(0)


down(5)