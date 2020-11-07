

def arrange(s):
    ups = []
    downs = []

    for a in s:
        if a == a.upper():
            ups.append(a)
        else:
            downs.append(a)
    result = downs + ups 
    return "".join(result)


str1 = 'PyNaTive'


print(arrange(str1))