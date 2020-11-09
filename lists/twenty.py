

def twenty(l):
    ind = l.index(20)
    if ind:
        l[ind] = 200
    return l 

list1 = [5, 10, 15, 20, 25, 50, 20]

print(twenty(list1))