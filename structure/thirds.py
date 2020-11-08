import math 

def thirds(arr):
    third = int(math.floor(len(arr) / 3))
    x = 0
    first = []
    second = []
    three = []

    while x < 3:
        if x == 0:
            first = arr[:third]
            first = first[::-1]
            print(first)
        elif x == 1:
            second = arr[third: third * 2]
            second = second[::-1]
            print(second)
        else:
            three = arr[third * 2:]
            three = three[::-1]
            print(three)
        x += 1

    
l = [11, 45, 8, 23, 14, 12, 78, 45, 89]

thirds(l)
