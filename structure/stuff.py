

def stuff(arr):
    myArr = list(set(arr))
    myTup = tuple(myArr)
    small = min(myTup)
    large = max(myTup)

    print('Uniques: {}'.format(myArr))
    print('')
    print('min: {}'.format(small))
    print('max: {}'.format(large))


sampleList = [87, 45, 41, 65, 94, 41, 99, 94]
sampleList2 = [87, 52, 44, 53, 54, 87, 52, 53]

stuff(sampleList)
stuff(sampleList2)