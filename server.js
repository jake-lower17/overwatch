var express = require('express');

//create our app
var app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.listen(port, function () {
  console.log('Express server is up on port ' + port);
});
