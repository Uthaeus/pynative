

def down(n):
    while n > 0:
        text = []
        rng = range(0, n)
        for i in rng:
            text.append('*')
        print(" ".join(text))
        n -= 1

down(5)