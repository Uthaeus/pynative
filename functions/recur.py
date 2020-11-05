

def recur(arr, n):
    if n == 0:
        return arr[n]
    else:
        return arr[n] + recur(arr, n - 1)


rng = range(0, 11)

print(recur(rng, 10))
