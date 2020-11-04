

def rev(n):
    s = str(n)[::-1]
    result = []

    for c in s:
        result.append(c)

    return " ".join(result)


print(rev(7536))
