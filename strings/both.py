import re 

def both(s):
    arr = s.split(' ')
    result = []
    for x in arr:
        l = len(re.findall('[a-zA-Z]', x))
        n = len(re.findall('\d+', x))
        if l > 0 and n > 0:
            result.append(x)

    return result


str1 = "Emma25 is Data scientist50 and AI Expert"

print(both(str1))