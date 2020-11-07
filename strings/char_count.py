

def char_count(s):
    d = {}
    for x in s:
        if x in d:
            d[x] += 1
        else:
            d[x] = 1

    return d   

print(char_count('Apple'))