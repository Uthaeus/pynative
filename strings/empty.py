

def empty(l):
    result = []
    for x in l:
        if x and len(x) > 0:
            result.append(x)

    return result 

str_list = ["Emma", "Jon", "", "Kelly", None, "Eric", ""]

print(empty(str_list))