import re 

def sums(s):
    n = re.findall('\d+', s)
    nums = map(lambda x: int(x), n)
    length = len(n)
    total = reduce(lambda a, b: a + b, nums)
    avg = float(total) / length 

    print("sum is {}\naverage is {}".format(total, avg))


str1 = "English = 78 Science = 83 Math = 68 History = 65"

sums(str1)