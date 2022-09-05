const express = require('express');
const server = express();

server.all('/', (req, res) => {
    res.sendFile('html/index.html', {root: __dirname })
});

module.exports = () => {
    server.listen(4000, () => {
        console.log('Server Ready.');
    });
    return true;
}