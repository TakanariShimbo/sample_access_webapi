const axios = require('axios');


async function access_webapi(){
    // define webapi_url
    let webapi_url;
    webapi_url = await 'https://sample-webapi-nodejs.glitch.me/api';
    // webapi_url = await 'https://hmkc1220.pythonanywhere.com/api';
    // webapi_url = await 'https://script.google.com/macros/s/AKfycbwYYw-JWVuzWeH2nXFEbodv19COIl45X59MdJe-XDkB4pXpEhBUe_iJYb0YvXyqewGk/exec'

    // prepare data_send
    let data_send = await {
        'value1': 'test_value1',
        'value2': 999
    };

    // set headers
    let headers = await {
        'content-type': 'application/json'
    };

    // requests, and check result
    let res = await axios.post(webapi_url, data_send, {'headers': headers});
    console.log(res.data);
}


// run
access_webapi();