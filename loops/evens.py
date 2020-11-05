

def evens(l):
    result = []
    x = 0
    while x < len(l):
        if x % 2 != 0:
            result.append(str(l[x]))
        x += 1

    return ' '.join(result)


my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

print(evens(my_list))