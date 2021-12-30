## node定时器

setTimeout()

setInterval()

setImmediate()

process.nextTick()

### 异步任务

两种：

1. 追加在本轮循环的异步任务
2. 追加在此轮循环的异步任务

循环即指事件循环，event loop

process.nextTick和promise的回调函数追加在本轮循环，同步执行完后马上执行他们。setTimeout、setInterval、setImmediate的回调函数，追加在次轮循环


### process.nextTick

本轮同步任务执行完后执行，在所有异步任务中最快执行

### 事件循环

无限次执行，只有异步任务的回调函数队列清空了，才会停止执行