

def table():
    hor = range(1, 11)
    strs = map(lambda x: str(x), hor)

    print('   '.join(strs))

    x = 1
    while x < 10:
        temp = []
        y = 0
        while y < 10:
            if y == 0:
                temp.append(hor[x])
            else:
                temp.append(temp[0] * hor[y])
            y += 1
        
        s = map(lambda m: str(m), temp)
        print("   ".join(s))
        x += 1
    


table()