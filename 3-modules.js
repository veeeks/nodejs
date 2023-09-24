// GLOBALS - NO WINDOW

// __DIRNAME -  path to current directory
// __filename - file name
// require - function to use modules
// module -- info about current module (file)

//process - info about env where th program is being exectued

//modules  - only share the minimum! 

const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require('./6-alternative-flavours')
require('./7-mind-grenade')
//console.log(data)


sayHi('susan')
sayHi(names.john)
sayHi(names.peter) 