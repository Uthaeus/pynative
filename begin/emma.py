

def emma(s):
    arr = s.split(' ')
    count = 0

    for word in arr:
        if word == 'Emma':
            count += 1

    return "Emma appeared {} times".format(count)


text1 = 'Emma is a good developer. Emma is a writer'
text2 = 'This does not say the word'

print(emma(text1))
print(emma(text2))