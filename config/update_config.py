import os
import json

env = os.environ

print(env)
with open("package.json", "r") as jsonFile:
    data = json.load(jsonFile)
    data['version'] = env['VERSION_NO'] + '.' + env['BUILD_NO']

with open("package.json", "w") as jsonFile:
    json.dump(data, jsonFile, indent=2, separators=(',', ': '))