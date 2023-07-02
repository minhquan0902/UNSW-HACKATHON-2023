var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
const { v4: uuidv4 } = require("uuid");

var raw = "{\r\n    \"test\":\"test\",\r\n    \"test2\": \"test2\"\r\n}";

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