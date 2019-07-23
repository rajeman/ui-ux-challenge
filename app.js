var express = require('express');

var port = process.env.PORT || 3005;

var app = express();

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
