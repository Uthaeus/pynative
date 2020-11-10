

def merge(o1, o2):
    result = o1.copy()
    result.update(o2)

    return result 


dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}

print(merge(dict1, dict2))