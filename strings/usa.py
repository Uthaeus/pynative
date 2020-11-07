import re 

def usa(s):
    p = 'usa'
    count = len(re.findall(p, s, re.I))

    return 'The USA count is: {}'.format(count)


str1 = "Welcome to USA. usa awesome, isn't it?"

print(usa(str1))