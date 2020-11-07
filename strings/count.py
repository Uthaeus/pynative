import re 

def counter(s):
    
    # letters = len(re.findall('[a-zA-Z]', s))
    # nums = len(re.findall('\d+', s))
    # symbols = len(s) - (letters + nums)

    # print("Total counts of chars, digits, and symbols\n")
    # print("Chars = {}".format(letters))
    # print("Digits = {}".format(nums))
    # print("Symbol = {}".format(symbols)) 
    digits = 0
    chars = 0
    syms = 0

    for x in s:
        if ord(x) >= 48 and ord(x) <= 57:
            digits += 1
        elif ord(x) >= 65 and ord(x) <= 90 or ord(x) >= 97 and ord(x) <= 122:
            chars += 1
        else:
            syms += 1

    print("Total counts of chars, digits, and symbols\n\nChars = {}\nDigits = {}\nSymbols = {}".format(chars, digits, syms))
        


str1 = "P@#yn26at^&i5ve"

counter(str1)