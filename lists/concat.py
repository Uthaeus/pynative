

def concat(a1, a2):
    x = 0
    result = []
    while x < len(a1):
        temp = a1[x] + a2[x]
        result.append(temp)
        x += 1

    return result 

list1 = ["M", "na", "i", "Ke"] 
list2 = ["y", "me", "s", "lly"]

print(concat(list1, list2))