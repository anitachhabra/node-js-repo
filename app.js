// npm --version
// local dependency - use it only in this particualr project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


//package.json - manifest file (stores important info about project/package)'
//manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
//npm init -y (everything default)


const _ = require('lodash')

const item = [1, [2,3[4,5]]]
const newItems =item.flatMap();

console.log(newItems);