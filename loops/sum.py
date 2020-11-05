

def sums():
    print("Enter a number: ")
    n = input()
    rng = range(1, n + 1)
    total = reduce(lambda a, b: a + b, rng)

    print("Your sum for {} is:  {}".format(n, total))

sums()