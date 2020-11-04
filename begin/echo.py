

def echo(n):
    rng = range(1, n + 1)
    for x in rng:
        y = 0
        temp = []
        while y < x:
            temp.append(str(x))
            y += 1
        print(" ".join(temp))

echo(5)