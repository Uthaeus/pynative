import datetime 

def current():
    x = datetime.datetime.now()
    return x.strftime("%c")


print(current())
