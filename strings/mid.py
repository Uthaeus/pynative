import math 


def mid(s):
    m = math.floor(len(s) / 2) - 1
    return s[m: m + 2]


print(mid('JaSonAy'))