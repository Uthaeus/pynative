import math 

def middle(s1, s2):
    m = int(math.floor((len(s1) / 2))) 
    pre, post = s1[:m], s1[m:]

    return pre + s2 + post 

s1 = "Ault"
s2 = "Kelly"

print(middle(s1, s2))