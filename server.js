const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

// app.use('/passwordResetApp/resources', express.static(__dirname + '/app'));
// app.get('/jokaDirectory', function (req, res) {
//     res.sendFile(path.join(__dirname + '/app/app.html'));
// });
app.use('/jd', express.static(__dirname + '/src'));
console.log(__dirname);
app.use(express.static(__dirname));

app.get('/jd', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, () => console.log(`\nJoka Directory is listening on port ${port}!!\n`));