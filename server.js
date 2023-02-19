var express = require("express");
var app = express();
var path = require("path");

const port = process.env.PORT || 5000;

// app.use('/passwordResetApp/resources', express.static(__dirname + '/app'));
app.get('/jokaDirectory', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/app.html'));
});

app.listen(port, () => console.log(`\nJoka Directory is listening on port ${port}!!\n`));