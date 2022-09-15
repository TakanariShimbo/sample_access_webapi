import json
import requests


def access_webapi():
    # define webapi_url
    # webapi_url = 'https://sample-webapi-nodejs.glitch.me/api/'
    webapi_url = 'https://hmkc1220.pythonanywhere.com/api/'
    # webapi_url = 'https://script.google.com/macros/s/AKfycbwYYw-JWVuzWeH2nXFEbodv19COIl45X59MdJe-XDkB4pXpEhBUe_iJYb0YvXyqewGk/exec'

    # prepare data_send
    data_send = {
        'value1': 'test_value1',
        'value2': 999
    }

    # set headers
    headers = {
        'Content-Type': 'application/json',
    }

    # requests
    response = requests.post(webapi_url, data=json.dumps(data_send), headers=headers)

    # check result of requests
    print(response.content.decode('UTF-8'))
   
    
if __name__ == '__main__':
    # run
    access_webapi()
