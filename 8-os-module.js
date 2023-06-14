const os = require('os');
//Info about current user
const user = os.userInfo();

console.log(user);
//info about user uptime
console.log(`the uptime of current user is ${os.uptime} seconds`);

const currentos = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentos);