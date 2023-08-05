import requests     # pip install requests

def get_requests():
    # https://sunrise-sunset.org/api
    params = {
        'lat': '50.5039',
        'lng': '4.4699',
        'formatted': 0
    }
    response = requests.get(url='https://api.sunrise-sunset.org/json', params=params)
    response.raise_for_status()
    ret = response.json()
    print(ret)

if __name__ == "__main__":

    get_requests()