const path = require('path')

console.log(path.sep);

const filePath = path.join('/content//', 'subFolder', 'test.txt');
console.log(filePath);

console.log(path.basename(filePath));

const absolute =  path.absolute(__dirname, '//content','subFolder', 'test.txt');


console.log(absolute);
