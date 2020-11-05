
def inputter():
    arr = []
    while len(arr) < 5:
        print('Please enter a number:')
        temp = input()
        arr.append(temp)
    return arr 


print(inputter())