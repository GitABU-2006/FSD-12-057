<hr> 

# EventLoop
JS is a synchronous and single threaded bydefault

## There can be async behaviour 
- with BrowserAPI - setTimeout, setInteerval, setImmediate, nextTick
- with promises 
- with event handlers 
<hr><hr>

# Promise
- A function not executed immediately but it must be executed after a while it has some status during the execution. At final it may resolve(success) or reject(unsuccess)
<hr><hr>

# CallBack
- Call back function => that pass as argument or parameter to another function 
<hr><hr>

## Modern JS is divided into 2 categories
- CommonJS (.cjs) -> Suppport OOPS
- ModuleJS (.mjs) -> follow modular approach -> import -priority (Promise, nextTick, setImmediate/setTimeout)