from datetime import datetime 

def strin(s):
    datetime_object = datetime.strptime(s, '%b %d %Y %I:%M%p')
    return datetime_object

date_string = "Feb 25 2020 4:20PM"


print(strin(date_string))