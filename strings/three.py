import math 

def three(s1, s2):
    x = 0
    text = ''

    while x < 3:
        if x == 0:
            text += s1[0]
            text += s2[0]
        elif x == 1:
            m = int(math.floor(len(s1) / 2))
            text += s1[m]
            m = int(math.floor(len(s2) / 2))
            text += s2[m]
        elif x == 2:
            text += s1[-1]
            text += s2[-1]
        x += 1

    return text 

s1 = "America"
s2 = "Japan"

print(three(s1, s2))