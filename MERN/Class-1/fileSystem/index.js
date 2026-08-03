const fsp = require('node:fs/promises')

console.log('START');

fsp.readFile('abc.txt', {encoding:'utf-8'})
    .then((val) => console.log(val));


console.log('END');