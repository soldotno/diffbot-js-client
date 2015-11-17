# Diffbot API Node client

Unofficial node version of the [diffbot-js-client repo](https://github.com/diffbot/diffbot-js-client)

## Installation

```
   npm install diffbot-node-client
```

## Usage

a short example of how to use the  Article API, see [diffbot-js-client](https://github.com/diffbot/diffbot-js-client)
for more example on other apis.  The client works the same way for both js-client and the node-client.

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
