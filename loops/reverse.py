

def rev(l):
    result = []
    for x in l:
        result = [x] + result 

    for c in result:
        print(c)

list1 = [10, 20, 30, 40, 50]

rev(list1)