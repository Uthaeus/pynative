import math 


def mid(s):
    m = int(math.floor(len(s) / 2) - 1)
    return s[m: m + 3]


print(mid('JaSonAy'))