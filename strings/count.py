import re 

def counter(s):
    
    letters = len(re.findall('[a-zA-Z]', s))
    nums = len(re.findall('\d+', s))
    symbols = len(s) - (letters + nums)

    print("Total counts of chars, digits, and symbols\n")
    print("Chars = {}".format(letters))
    print("Digits = {}".format(nums))
    print("Symbol = {}".format(symbols)) 


str1 = "P@#yn26at^&i5ve"

counter(str1)