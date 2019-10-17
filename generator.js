const UserAgent = require('user-agents');
const fs = require('fs');

// Example output:
//   User Agent: "Mozilla/5.0 (Windows NT 6.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
for(var i = 0; i < 250; i++) {
    var userAgent = new UserAgent({ deviceCategory: 'desktop' });
    console.log(`User Agent: "${userAgent}"`);
    
    fs.appendFile('agents.txt', userAgent + "\n", function (err) {
        if (err) throw err;
    });
}