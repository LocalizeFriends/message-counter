var fs = require('fs'),
    path = require('path');

var counterFile = path.join(__dirname, '../public/message-count.txt'),
    count = 0;

try {
    count = fs.readFileSync(counterFile).toString();
} catch(err) {
    if (err.code !== 'ENOENT') {
        throw err;
    }
}

module.exports = {
    incrementSync: function() {
        ++count;
        fs.writeFileSync(counterFile, count);
    },
    getCount: function() {
        return count;
    }
}
