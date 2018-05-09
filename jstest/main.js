/*require(['math'], function (math){
	 alert(math.add(1,1));
});
*/

// var rocker = require('./rocker.js');
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
	alert("test!");
    // rocker.invoke()
    
    var arr = new Array(6)
    arr[0] = "George"
    arr[1] = "John"
    arr[2] = "Thomas"
    arr[3] = "James"
    arr[4] = "Adrew"
    arr[5] = "Martin"

    document.write(arr + "<br />")   //output George,John,Thomas,James,Adrew,Martin
    document.write(arr.slice(2,4) + "<br />") //output arr[2],arr[3] Thomas,James
    document.write(arr.slice(2) + "<br />")
    document.write(arr.slice() + "<br />")
}

function testDotDotDot()
{
	const a = {
        a: 1,
        b: 2,
        c: 3
    };
    const b = {
    ...a,
    d: [],
    b: 5  //this will update the b value in a{}
    }
    console.log(b);
    //output:{a: 1, b: 5, c: 3, d: Array(0)}
}

// let promiseToCleanTheRoom = new Promise(function(resolve,reject){
	
// 	//cleaning the room
	
// 	let isClean = false;
	
// 	if(isClean){
// 		resolve('Clean');
// 	}else{
// 		reject('not Clean');
// 	}
	
// });

// let myFirstPromise = new Promise(function(resolve, reject){
//     //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
//     //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
//     setTimeout(function(){
//         resolve("success!"); //代码正常执行！
//     }, 250);
// });	

// myFirstPromise.then(function(successMessage){
//     //successMessage的值是上面调用resolve(...)方法传入的值.
//     //successMessage参数不一定非要是字符串类型，这里只是举个例子
//     console.log("Yay! " + successMessage);
// });



