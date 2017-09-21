var request = require('http/v3/request');
var response = require('http/v3/response');

var method = request.getMethod();
var authType = request.getAuthType();

response.println("[Method]: " + method);
response.println("[Auth Type]: " + authType);
response.flush();
response.close();
