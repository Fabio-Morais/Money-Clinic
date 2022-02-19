import json

# Opening JSON file
f = open('eslint.json')
data = json.load(f)

for i in data:
    src = i['filePath']
    i['filePath'] = src[src.find('src'): len(src)]

json_string = json.dumps(data)
with open('eslint.json', 'w') as outfile:
    outfile.write(json_string)
