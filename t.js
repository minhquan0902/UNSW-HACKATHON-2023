var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = "{\n    \"test\":\"test\"\n}";

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://v5ke4o8bb8.execute-api.ap-southeast-2.amazonaws.com/dev/test", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));