# Diffbot API Node client

[![Greenkeeper badge](https://badges.greenkeeper.io/soldotno/diffbot-node-client.svg)](https://greenkeeper.io/)

Unofficial node version of the [diffbot-js-client repo](https://github.com/diffbot/diffbot-js-client)

## Installation

```
   npm install diffbot-node-client
```

## Usage

a short example of how to use the  Article API, see [diffbot-js-client](https://github.com/diffbot/diffbot-js-client)
for more example on other apis.  The client works the same way for both js-client and the node-client.

### Uses superagent under the hood.

  If you get and timeout or in some other way need to change
  how the request is performed you can send in the first argument send in a
  superagent instanse, and the libary will used that.

### Article API

```JavaScript
  var DiffBot = require('diffbot-node-client');
  var client = new DiffBot("your token");

  client.article.get({
       url: url
     }, function onSuccess(response) {
       console.log('Success', response);
     }, function onError(response) {
       console.log('Error',response);
   });
```

### Usage of superagent
```JavaScript
  var DiffBot = require('diffbot-node-client');
  var client = new DiffBot("your token");

  client.article.get({
       superagent: superagent.timeout(10000) // 10 sec timeout
       url: url
     }, function onSuccess(response) {
       console.log('Success', response);
     }, function onError(response) {
       console.log('Error',response);
   });
```
