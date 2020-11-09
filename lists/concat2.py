

def cat(a1, a2):
    result = []

    for x in a1:
        for y in a2:
            temp = x + y 
            result.append(temp)

    return result 

list1 = ["Hello ", "take "]
list2 = ["Dear", "Sir"]

print(cat(list1, list2))