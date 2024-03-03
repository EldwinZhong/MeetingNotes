import openai

with open('key.txt', "r") as f:
    key = f.read()

openai.api_key = key