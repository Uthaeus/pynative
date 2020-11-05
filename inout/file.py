

def filer():
    with open('test.txt', 'r') as reader:
        line = reader.readline()
        while line != '':
            if line[4] != '5':
                f = open('newFile.txt', 'a')
                f.write(line)
                f.close()
            line = reader.readline()





filer()