// Set your DIFFBOT_TOKEN as a ENV VAR. For sh: `export DIFFBOT_TOKEN=<your-token>`.

var DiffBot = require('./diffbot')

function getArticleData(url, callback) {
  var client = new DiffBot(process.env.DIFFBOT_TOKEN);

  client.article.get({
       url: url
     }, function onSuccess(response) {
       callback(null, response);
     }, function onError(response) {
       callback(response, null);
   });
}

getArticleData("http://www.xconomy.com/san-francisco/2012/07/25/diffbot-is-using-computer-vision-to-reinvent-the-semantic-web/", function(err, result) {
  if(err)  {
    return console.log('ERR: ', err);
  }
  console.log('RESULT: ', result);
});
