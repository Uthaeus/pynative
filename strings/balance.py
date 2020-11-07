

def balance(s1, s2):
    for c in s1:
        if c not in s2:
            return False 

    return True 


s1 = "Yn"
s2 = "PYnative"

print(balance(s1, s2))

s3 = "Ynf"
s4 = "PYnative"

print(balance(s3, s4))