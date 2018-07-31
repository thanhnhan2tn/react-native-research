import os
import json

env = os.environ

config = json.load(open('../package.json').read())

print(config.version)