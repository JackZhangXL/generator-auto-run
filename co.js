var fs = require('fs');
var co = require('co');

var readFile = function (fileName, options) {
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, options, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};

// readFile('./apples.txt', 'utf8').then(function(data){
//     console.log(data);
//     return readFile('./oranges.txt', 'utf8'); 
// }).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// });


var gen = function* () {
    var f1 = yield readFile('./apples.txt', 'utf8');
    console.log(f1);
    var f2 = yield readFile('./oranges.txt', 'utf8');
    console.log(f2);
};

// var g = gen();
// g.next().value.then(function(data) {
//     g.next(data).value.then(function(data) {
//         g.next(data);
//     });
// });

// function run(gen){
//     var g = gen();
//     function next(data){
//         var result = g.next(data);
//         if (result.done) return result.value;
//         result.value.then(function(data){
//             next(data);
//         });
//     }
//     next();
// }
// run(gen);

co(gen);
