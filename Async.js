var fs = require('fs');
require("babel-polyfill");

var readFile = function (fileName, options) {
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, options, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};

// var gen = function* () {
//     var f1 = yield readFile('./apples.txt', 'utf8');
//     console.log(f1);
//     var f2 = yield readFile('./oranges.txt', 'utf8');
//     console.log(f2);
// };

// var g = gen();
// g.next().value.then(function(data) {
//     g.next(data).value.then(function(data) {
//         g.next(data);
//     });
// });


// var asyncReadFile = async function (){
//     var f1 = await readFile('./apples.txt', 'utf8');
//     var f2 = await readFile('./oranges.txt', 'utf8');
//     console.log(f1);
//     console.log(f2);
// };
// asyncReadFile();


// var f = async function () {
//     return 'hello world';
// }
// f().then(v => console.log(v));   // "hello world"


// var asyncReadFile = async function (){
//     var f1 = await readFile('./apples.txt', 'utf8');
//     var f2 = await readFile('./oranges.txt', 'utf8');
//     var arr = new Array();
//     arr.push(f1);
//     arr.push(f2);
//     return arr;
// };

// asyncReadFile().then(function(value) {
//     value.forEach(function(v){
//         console.log(v);
//     });
// });


// var f = async function () {
//     await Promise.reject('出错了');
//     return await Promise.resolve('成功了');   // 不会被执行
// };

// f().then(v => console.log(v))
//    .catch(e => console.log(e));     //出错了


// var f = async function () {
//     try {
//         await Promise.reject('出错了');
//     } catch(e) {
//         return await Promise.resolve('成功了');
//     }
// };

// f().then(v => console.log(v))
//     .catch(e => console.log(e));     //成功了


// var f = async function () {
//     await Promise.reject('出错了').catch(e => console.log(e));
//     return await Promise.resolve('成功了');
// };

// f().then(v => console.log(v))
//     .catch(e => console.log(e));
// //出错了
// //成功了

