

def iterater():
    rng = range(0, 10)
    previous_num = 0

    print("Printing current and previous number sum in a given range(10)")
    for x in rng:
        temp = x + previous_num
        print("Current Number {} Previous Number {} Sum: {}".format(x, previous_num, temp))
        previous_num = x 
    


iterater()