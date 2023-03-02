from flask import Flask
import requests
import json

import os

app = Flask(__name__)

@app.route("/")
def get_pokemon():
    url = "https://pokeapi.co/api/v2/pokemon/"

    response = []
    for i in range(1, 152):
        response.append(requests.get(f'{url}{i}').json())

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(response, f, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    get_pokemon()