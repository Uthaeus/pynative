import os 

def is_empty(path):
    return os.stat(path).st_size == 0


print(is_empty('test.txt'))
print(is_empty('newFile.txt'))

