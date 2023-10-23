const sum = (a ,b) => a+b;
module.exports.mul = (a ,b)=>{a*b};
exports.div = (a ,b)=>{a/b};
const sub = (a ,b)=>{a-b};
const g = 9.8;
const PI = 3.14;

//module.exports = 123 + " Hello";
let obj = {
    sum:sum,
    mul:mul,
    div:div,
    sub:sub,
    g:g,
    pi:PI
};
module.exports = obj;