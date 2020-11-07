import re 

def special(s):
    arr = s.split(' ')
    result = []

    for i in arr:
        temp = re.findall('[a-zA-Z0-9]', i)
        if len(temp) > 0:
            result.append(''.join(temp))

    return " ".join(result)


str1 = "/*Jon is @developer & musician"


print(special(str1))