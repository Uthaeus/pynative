import re 

def rep(s):
    temp = re.sub('[/*@&!]', '#', s)

    return temp 

str1 = '/*Jon is @developer & musician!!'

print(rep(str1))