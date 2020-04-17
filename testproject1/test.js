var request = require('http/v3/request');
var response = require('http/v3/response');

var method = request.getMethod(); // method
var authType = request.getAuthType(); // auth type

// commit in branch 1

response.println("[Method]: " + method); // print method
response.println("[Auth Type]: " + authType);
response.flush();
response.close();
