

def prod_or_sum(a, b):
    prod = a * b 
    if prod > 1000:
        return a + b 
    else: 
        return prod 


print(prod_or_sum(20, 30))