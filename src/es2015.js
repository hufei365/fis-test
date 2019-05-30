const c = require('test-common:src/common.js');

console.log(c.name);

Promise.reject(`reject ed eded`).catch(e=>{
    console.log(e)
});

import g from 'babel7/generator';

console.log(g);



const extend=require('extend');

console.log(extend({},{
    name: "I am defined in test"
}));


module.exports={
    name: 'es2015'
}