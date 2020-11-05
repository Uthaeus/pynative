

def stars(n):
    nums = range(1, n + 1) + range(1, n)[::-1]

    for x in nums:
        temp = []
        y = 0
        while y < x:
            temp.append('*')
            y += 1
        print(" ".join(temp))


stars(5)