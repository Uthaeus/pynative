

def vals(obj):
    result = []
    for item in obj:
        if obj[item] not in result:
            result.append(obj[item])

    return result 


speed ={'jan':47, 'feb':52, 'march':47, 'April':44, 'May':52, 'June':53, 'july':54, 'Aug':44, 'Sept':54}


print(vals(speed))