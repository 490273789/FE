// node 的全局对象global
// 特点：每个文件都是一个模块，模块外面包含了匿名函数
// module、export、require、__dirname、__filename
console.log(this === global)
console.log(this === module.exports);

(function(){
    console.log(this === global)
})()

console.log(global)
// global中的属性
// process 进程 开启很多个线程
// Buffer 缓存区 

// 浏览器中的解析
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// node中的解析
// script start
// async1 start
// async2
// promise1
// script end
// promise2
// async1 end
// setTimeout
