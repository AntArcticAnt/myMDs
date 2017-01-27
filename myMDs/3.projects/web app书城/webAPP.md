# Web App整站开发笔记
一期项目开发
===========
##### 解决问题的能力
  1. 视频
  2. 网上搜索
  3. 自己思考
#### HTML5的应用(技术层面和实际开发流程,设计到实现过程)
  * HTML5技术应用:
    1. 基于webview的hybrid native开发
    2. HTML5的web开发(网站,广告,游戏)
    ##### 阅读器开发-案例中技术点的分解
      *   #####技术分解:
     1. 使用base64格式图片制作ICON: (优势:减少请求,加快首屏加载速度,劣势:难以维护);
     2. 使用CSS3制作ICON: (劣势:兼容性差,优势:适合webapp);
     3. [HTML5-API:](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5) DOM操作,本地数据缓存,硬件接口
        * window.performance.timing:是一个对象 [性能监控接口],
        * window.localStorage.setItem('a',1)/getItem('a'):两个方法  [本地存储];
        * Workers:是一个构造函数 [多一个线程]:一些非UI和DOM的事情交给后台来进行;异步处理方法
        ```
        var myWorker= new Worker("my_task.js");

        myWorker.onmessage=function(oEvent){console.log('Called back by the worker!\n')}
        ```
        * XMLHttpRequest Level 2[跨域请求]
          1. 传统方式:iframe , jsonp[script标签];
          2. 同域的概念:相同的>协议,域名(父域),端口;
          3. XMLHttpRequest Level 2的写法:前端不需要做事情,服务器设置响应头:
           ```
            header('Access-Control-Allow-Origin:*')
            或者
            header('Access-Control-Allow-Origin:www.baidu.com,www.qq.com')

           ```
        * 触屏事件: 'touchstart','touchmove','touchend',鼠标和触屏混用('mousedown','mouseup','click','mousemove');
        *  History API
        * conentEditable
        * HTML5 activeElement 和 hasFocus 属性
        * navigator.registerProtocolHandler() 方法
        * requestAnimationFrame
        * 全屏 API
        * 指针锁定 API
        * 在线和离线事件
    4. 使用viewport固定真个页面宽度
        * `<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">`;
    5. 移动端性能陷阱和硬件加速
        * PC时代:把script标签放在body后面防止阻塞
        * 移动端1: 减少或避免repaint和reflow.(页面重绘页面回流,本质就是减少对DOM元素的操作)
        * 移动端2: 缓存: 尽量缓存所有可以缓存的数据(HTTP缓存>`Response Headers>Cache-Control:max-age=31536000,还有ETag[md5标识,标记是否变化],Expires[时间戳],`);
        * 移动端3:缓存: `localStorage.setItem()`只能存字符串,可以序列化.`sessionStorage`,`indexedDB`
        * [使用CSS3 transform代替DOM操作,CSS3效果库](https://daneden.github.io/animate.css/)
        * 注意:不要给非static定位元素(absolute,relative)增加CSS3动画,硬件加速`canvas>GPU,transform:translate3d(0,0,0)`;

##### 开发流程介绍,需求分解和技术选型
  1. 流程:交互解读 => 设计解读 => 开发25% => 测试上线  (前端>交互图和需求分解);
  2. 移动端的技术选型原则(还没有设计图):1.轻量化 2.维护简单 3.快速开发 4.原生,框架,库的选择 5.模块化拆分
  3. 文件目录结构的划分:





二期项目开发
===========
# 一期 -- 阅读器开发
*  前端交互比较复杂的模块
* 原有WebApp阅读器在整个项目中的意义:
   1. 整个系统的子模块
   2. 是一个用于展示数据的,前端交互相对复杂的模块
   3. 学习这个模块的意义是帮助大家深入理解WebApp端的前端开发

# 二期 -- 一期项目上拓展
*  新技术 vue,koa
* 前端页面的扩展和开发
* NodeJS服务器端环境的搭建和服务设施的提供
 1. 前后端语言风格的统一
 2. 开发方式上前端和后端彻底隔离
 3. 使用常见的NodeJS web服务框架 (KOA/ExpressJS)
* mock数据的提供和模拟

# 逆向软件工程--用自己熟悉的技术/基于通用的工程
# WebApp整体技术选型原则
 1. 突出以前端为核心,尽量规避后端的实现逻辑
 2. 对于后端的处理要更接近前端的理解方式



# 1. npm
1. 搭建NodeJS运行环境
2. 基于NodeJS的服务端的搭建&开发
3. 项目文件和目录结构的搭建(架构设计)
4. 运行网站NodeJS基础的开发
5. 为网站添加接口,连通数据和后端服务


# 2. koa2
1. [koa是基于Node.js平台的下一代web开发框架.](http://koa.bootcss.com)
2. koa和express对比:不绑定中间件,只是一个函数库
3. 应用
 ```
     var koa = require('koa');
     var app = koa();

     app.use(function *(){
       this.body = 'Hello World';
     });

    app.listen(3000);
```

# 3. vue
1. [vue的官网](http://cn.vuejs.org/)

# 4. EJS 模板引擎
1. 后台服务端渲染模板
