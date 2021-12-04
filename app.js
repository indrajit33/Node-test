var x = require('./greet');
x.greet();
x.name();


var {greet , name} = require('./greet');
greet();
name();