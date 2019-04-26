//回调
function my(seconf){
   seconf();
 }
 function seconf(){
   console.log(this);
 }
 my(seconf);
//promise
// var my = 0;
// var promise2 = new Promise((resolve,reject)=>{
// 	if(resolve==reject)
// 		setTimeout(()=>{resolve()},1000);
// 	else
// 		reject();

// })
// promise2.then(function onresolve(){console.log(my);},function onreject(){alert("异步未完成");})
//同步异步顺序
// console.log(1);
// setTimeout(function(){
//      console.log(2);
// },0)
// console.log(3)
// setTimeout(function(){
//      console.log(4);
// },1000)
// console.log(5);