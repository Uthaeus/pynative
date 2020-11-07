

def mix(s1, s2):
    s2 = s2[::-1]
    length = max([len(s1), len(s2)])
    result = ''

    for x in range(0, length):
        if s1[x]:
            temp = s1[x] + s2[x]
            result += temp 
        else:
            result += s2[x:]
            break 
    return result 


s1 = "Abc"
s2 = "Xyz"

print(mix(s1, s2))