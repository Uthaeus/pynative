

def history():
    sampleDict = { 
        "class":{ 
            "student":{ 
                "name":"Mike",
                "marks":{ 
                    "physics":70,
                    "history":80
                }
            }
        }
    }

    return sampleDict['class']['student']['marks']['history']


print(history())