

def largest(arr):
    l = arr[0]
    for i in arr:
        if i > l:
            l = i 

    return l 


aList = [4, 6, 8, 24, 12, 2]

print(largest(aList))