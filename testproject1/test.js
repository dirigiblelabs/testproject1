var request = require('http/v3/request');
var response = require('http/v3/response');

var method = request.getMethod();

response.println("[Method]: " + method);
response.flush();
response.close();
