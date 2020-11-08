

def move(arr):
    first = arr[:4] + arr[5:]
    result = first[:2] + [arr[4]] + first[2:] + [arr[4]]

    return result 


List = [34, 54, 67, 89, 11, 43, 94]

print(move(List))