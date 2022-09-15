// Ref. https://dev.classmethod.jp/articles/google-apps-script-request/

function access_webapi() {
    // define webapi_url
    let webapi_url;
    // webapi_url = 'https://sample-webapi-nodejs.glitch.me/api/';
    // webapi_url = 'https://hmkc1220.pythonanywhere.com/api/';
    // webapi_url = 'https://script.google.com/macros/s/AKfycbwYYw-JWVuzWeH2nXFEbodv19COIl45X59MdJe-XDkB4pXpEhBUe_iJYb0YvXyqewGk/exec'
    webapi_url = await 'https://sample-webapi-nextjs.vercel.app/api/sample/';

    // prepare data_send
    let data_send = {
        'value1': "test_value1",
        'value2': 999
    };
    
    // set headers
    let headers = {
        'Content-Type': 'application/json'
    };
    
    // set optinos
    let options = {
        'method' : 'post',
        'payload' : JSON.stringify(data_send),
        'headers' : headers
    };
    
    // requests
    let response = UrlFetchApp.fetch(webapi_url, options);
    
    // check result of requests
    let content = response.getContentText('UTF-8');
    console.log(content)
};

