var fs = require('fs');
var thunkify = require('thunkify');

// function someCallback(err, data) { 
//     if (err) throw err;
//     console.log(data); 
// }

// fs.readFile('./oranges.txt','utf8', someCallback);

// var Thunk = function (fileName, options){
//     return function (callback){
//         return fs.readFile(fileName, options, callback); 
//     };
// };

// var readFileThunk = Thunk('./oranges.txt', 'utf8');
// readFileThunk(someCallback);


// var Thunk = function(fn){
//     return function (){
//         var args = Array.prototype.slice.call(arguments);
//         return function (callback){
//             args.push(callback);
//             return fn.apply(this, args);
//         }
//     };
// };

// var readFileThunk = Thunk(fs.readFile);
// readFileThunk('./oranges.txt', 'utf8')(someCallback);

//curry
// var readFileThunk = fs.readFile.bind(null, './oranges.txt', 'utf8');
// readFileThunk(someCallback);

//Generator
var readFileThunk = thunkify(fs.readFile);

var gen = function* (){
    var r1 = yield readFileThunk('./apples.txt', 'utf8');
    console.log(r1);
    var r2 = yield readFileThunk('./oranges.txt', 'utf8');
    console.log(r2);
};


// var g = gen();
// var r = g.next();
// r.value(function(err, data){
//     if (err) throw err;
//     var r2 = g.next(data);
//     r2.value(function(err, data){
//         if (err) throw err;
//         g.next(data);
//     });
// });

// 可以优化
// var g = gen();
// var r = g.next();
// function someCallback2(err, data) { 
//     if (err) throw err;
//     var r = g.next(data);
//     r.value(function(err, data){
//         if (err) throw err;
//         g.next(data);
//     });
// }
// r.value(someCallback2);



function run(genFunc) {
    var g = genFunc();
    function next(err, data) {
        var result = g.next(data);
        if (result.done) return;
        result.value(next);
    }
    next();
}
run(gen);

