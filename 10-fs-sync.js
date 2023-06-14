const fs = require('fs')

const first = fs.readFileSync('./content/first.txt');
const second = fs.readFileSync('./content/second.txt')
console.log(`${first},${second}`);

fs.writeFileSync(
    './content/result-sync.txt',
    `Here is the results ${first} : ${second}`,
    {flag : 'a'}
    )