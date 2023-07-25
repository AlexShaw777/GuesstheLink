import pandas as pd
import numpy as np
import re
import json


df = pd.read_csv("2022-2023 roster.txt", sep=",")

df["Player"].to_csv("players.txt")

players = []

with open("players.txt", "r", encoding="utf8") as f:
    for line in f:
        mydict = {42 : None, 44: None, 48 : None, 49:None, 50:None, 51: None, 52:None, 53:None, 54:None, 55:None, 56:None, 57: None }
        open("players.txt", 'w').close()
        playersName = line.translate(mydict)
        players.append(playersName)

stripped = [s.strip() for s in players] #Stripped players

res = []
[res.append(x) for x in stripped if x not in res] #duplicates 

with open("players.txt", "w", encoding="utf8") as f:
    for x in res:
        f.write(x + "\n")

print(res)



######## For Teammate Section

df2 = pd.read_csv("teammates.txt", sep=",")

df2["Teammate"].to_csv("teammates.txt")
print(df2["Teammate"])

teammates = []

with open("teammates.txt", "r", encoding="utf8") as f:
    for line in f:
        mydict = {42 : None, 44: None, 48 : None, 49:None, 50:None, 51: None, 52:None, 53:None, 54:None, 55:None, 56:None, 57: None }
        open("teammates.txt", 'w').close()
        teammatesName = line.translate(mydict)
        teammates.append(teammatesName)

stripped = [s.strip() for s in teammates] #Stripped teammates

res = []
[res.append(x) for x in stripped if x not in res] #duplicates 

with open("teammates.txt", "w", encoding="utf8") as f:
    for x in res:
        f.write(x + "\n")

# print(res) for single quote

print(json.dumps(res))





#Do this for all 3