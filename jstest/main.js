/*require(['math'], function (math){
	 alert(math.add(1,1));
});
*/

var rocker = require('./rocker.js');
//rocker.name(); // 'My name is Lemmy Kilmister'
//const rocker = require('./rocker.js')
//rocker.name(); // 'My name is Lemmy Kilmister'

//var http = require('http');

/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
*/

function testjs()
{
	//alert("test!");
	rocker.invoke()
}

let promiseToCleanTheRoom = new Promise(function(resolve,reject){
	
	//cleaning the room
	
	let isClean = false;
	
	if(isClean){
		resolve('Clean');
	}else{
		reject('not Clean');
	}
	
});

let myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("success!"); //代码正常执行！
    }, 250);
});	

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
});



