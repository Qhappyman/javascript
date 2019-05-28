# JS异步原理(事件,队列)

------

### 调用栈

- JS执行时会形成调用栈,调用一个函数时,返回地址、参数、本地变量都会被推入栈中,如果当前正在运行的函数中调用另外一个函数,则该函数相关内容也会被推入栈顶.该函数执行完毕,则会被弹出调用栈.变量也随之弹出,由于复杂类型值存放于堆中,因此弹出的只是指针,他们的值依然在堆中,由GC决定回收.
- 尾调用:指某个函数的最后一步是调用另一个函数。由调用栈可知,调用栈中有a函数,如果a函数调用b函数,则b函数也随之入栈,此时栈中就会有两个函数.但是如果b函数是a函数最后一步,并且不需保留外层函数调用记录,即a函数调用位置变量等都不需要用到,则该调用栈中会只保留b函数,这就叫做"尾调用优化"（Tail call optimization），即只保留内层函数的调用记录。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用记录只有一项，这将大大节省内存。这就是"尾调用优化"的意义。

```
        function a() {
          let m = 1;
          let n = 2;
          return b(m + n);
        }
        a();
        
        // 等同于
        function a() {
          return b(3);
        }
        a();
        
        // 等同于
        b(3);
```

### 事件循环(event loop)和任务队列(task queue)

- JS的异步机制由事件循环和任务队列构成.JS本身是单线程语言,所谓异步依赖于浏览器或者操作系统等完成. JavaScript 主线程拥有一个执行栈以及一个任务队列，主线程会依次执行代码，当遇到函数时，会先将函数入栈，函数运行完毕后再将该函数出栈，直到所有代码执行完毕。
- 遇到异步操作（例如：setTimeout, AJAX）时，异步操作会由浏览器(OS)执行，浏览器会在这些任务完成后，将事先定义的回调函数推入主线程的任务队列(task queue)中,当主线程的执行栈清空之后会读取task queue中的回调函数,当task queue被读取完毕之后,主线程接着执行,从而进入一个无限的循环,这就是事件循环.

> However, we only have one main thread and one call-stack, so in case there is another request being served when the said file is read, its callback will need to wait for the stack to become empty. The limbo where callbacks are waiting for their turn to be executed is called the task queue (or event queue, or message queue). Callbacks are being called in an infinite loop whenever the main thread has finished its previous task, hence the name 'event loop'.

### Microtask 与 Macrotask

- 一个浏览器环境（unit of related similar-origin browsing contexts.）只能有一个事件循环（Event loop），而一个事件循环可以多个任务队列（Task queue），每个任务都有一个任务源（Task source）。例如,客户端可能实现了一个包含鼠标键盘事件的任务队列，还有其他的任务队列，而给鼠标键盘事件的任务队列更高优先级，例如75%的可能性执行它。这样就能保证流畅的交互性，而且别的任务也能执行到了。但是，同一个任务队列中的任务必须按先进先出的顺序执行。多个任务队列，是为了方便控制优先级。任务队列是一个先进先出的队列.
- macrotask 和 microtask 是异步任务的两种分类。在挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 macrotask 的队列（这个队列也被叫做 task queue）中取出第一个任务，执行完毕后取出 microtask 队列中的所有任务顺序执行；之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完。
- 全部代码(script)是一个macrotask,js先执行一个macrotask,执行过程中遇到(setTimeout, setInterval, setImmediate等)异步操作则创建一个macrotask,遇到(process.nextTick, Promises等)创建一个microtask,这两个queue分别被挂起.执行栈为空时开始处理macrotask,完成后处理microtask,直到该microtask全部执行完,然后继续主线程调用栈.

注:每一次事件循环（one cycle of the event loop），只处理一个 (macro)task。待该 macrotask 完成后，所有的 microtask 会在同一次循环中处理。处理这些 microtask 时，还可以将更多的 microtask 入队，它们会一一执行，直到整个 microtask 队列处理完。

![](C:\Users\hp\Desktop\前端知识精炼\Settimeout延迟问题\stack.png)