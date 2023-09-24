const os = require('os')

// info of current user. 

const user  = os.userInfo()


//method returns the system uptime in seconds.

console.log(`The system uptime is  ${os.uptime}`)



const currentOS = {
name:os.type(),
release:os.release(),
totalMen:os.totalmem(),
freeMem:os.freemem()
}

console.log(currentOS)