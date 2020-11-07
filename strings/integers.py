import re 

def integers(s):
    p = '\d+'
    nums = re.findall(p, s)

    return int("".join(nums))


str1 = 'I am 25 years and 10 months old'

print(integers(str1))