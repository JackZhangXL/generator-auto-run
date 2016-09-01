# generator-auto-run
generator auto run

These js files can read local file's content automatically.

You can run generator.js directly:

node generator.js


But you need to install thunkify module at first:

npm install thunkify

node Thunk.js


You also need to install co module at first:

npm install co

node co.js


My Node cannot run ES7 async, so I need to transfer it with Babel. If you have the same problem, You need to install Babel at first:

npm install --global babel-cli

cd yourfolder

npm install --save-dev babel-core

npm install --save-dev babel-preset-es2015

npm install --save-dev babel-preset-stage-3

npm install --save-dev babel-runtime

npm install --save-dev babel-polyfill

put .babelrc to your node environment

(Open Async.js add [require("babel-polyfill");])

babel Async.js -o Async-compiled.js

node Async-compiled.js
