

def read():
    file1 = open('test.txt', 'r')
    Lines = file1.readlines()

    for line in Lines:
        if '4' in line:
            print(line)


read()