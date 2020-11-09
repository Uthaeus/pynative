

def twenty(l):
    l = filter(lambda x: x != 20, l)

    return l 

list1 = [5, 20, 15, 20, 25, 50, 20]


print(twenty(list1))