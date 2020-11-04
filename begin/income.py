

def income(num):
    if num < 10000:
        return 0
    elif num <= 20000:
        return (num - 10000) * 0.1
    else:
        a = 10000 * 0.1
        b = (num - 20000) * 0.2
        return a + b 


print(income(45000))