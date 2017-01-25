### 初级
0. [修改主题颜色](http://mikeking.io/devtools-author/)
0. [Chrome地址栏功能](https://github.com/ChenChenJoke/JokerChrome)
1. [Chrome控制台实用指南](https://gold.xitu.io/post/57ce7f36c4c9710054ad2cac)
2. [Chrome开发者工具不完全指南(1-6)](http://www.cnblogs.com/constantince/category/712675.html)
8. [Chrome 开发者工具原版手册-翻墙](https://developers.google.com/web/tools/chrome-devtools/settings)
9. [Chrome 开发者工具中文手册](http://www.css88.com/doc/chrome-devtools/)



### 中级

3. [Chrome DevTools 之 Network，网络加载分析利器](http://www.jianshu.com/p/471950517b07)
4. [Chrome DevTools 之 Timeline，快捷性能优化工具](http://www.jianshu.com/p/b8cdcd9bfad8)
5. [Chrome Devtools Tips & Tricks-中](https://github.com/xitu/gold-miner/blob/master/TODO/chrome-devtools.md)
10. [英-技术博客](https://umaar.com/dev-tips/)
11. [中-技术博客](http://www.css88.com/archives/category/develop-message)

### 高级
5. [用 Chrome 开发者工具分析 javascript 的内存回收（GC）](http://mp.weixin.qq.com/s/zDFl58bxseZGsUvS3PjP0w)

6. [为何浏览器控制台的JavaScript引擎性能这么差？](https://www.zhihu.com/question/29352114)
7. [Chrome DevTools – 测试响应和设备特定可视窗口](http://www.css88.com/archives/6898)
8. [使用Chrome-DevTools并行调试node-js](http://xishiyi7.github.io/2016/10/14/%E4%BD%BF%E7%94%A8Chrome-DevTools%E5%B9%B6%E8%A1%8C%E8%B0%83%E8%AF%95node-js/)

# 基本功能:
* 打开 F12 --dock side控制显示方式(显示器下,右,外)
* Console控制台:JS命令行操作,显示JS错误信息,提示信息,日志信息,写入命令
* Elements元素:显示页面HTML源码,CSS样式,计算后的样式,事件,DOM断点,属性
* Network网络:显示页面下载和花费时间(筛选出不同的文件类型,请求类型)
* Application应用:最重要的是cookies(显示页面请求的Cookies,以及查看和修改)
* Source资源: 可以看到所有的代码,`format{}`按钮可以展开代码,我们还可以`点击行号`设置断点进行调试;
# 快捷键:
1. 查看所有快捷键的快捷键:F1>shortcuts
2. 选中页面上的在控制台中查看:ctrl+shift+C
3. 控制台中命令行输入换行使用shift+回车

# 功能分析(HTML+CSS):
网页HTML+CSS同步修改:
1. 左侧HTML(定位使用)
2. 右侧CSS(css数字调节=上下键(1个单位)+ctrl(100)/shift(10)/alt(0.1))
3. 在css样式表中大括号右侧双击可以添加样式
4.禁用样式(对号取消)
5. 回车保存

# 功能分析(AJAX请求监听):
1. XHR选项
2. 发出返回的信息


# 功能分析(JS控制台):
1. 内置命令调试程序 `console.log()`,`console.info()`,`console.debug()`,`console.error()`
2. 输入行调试:代码补全con+tab键
3. console.log('%d年%d月%d日',2017,1,24)   //占位符:(%d整数,%f浮点数,%s字符串,%o对象)
4.其他命令:



        console.group('字符串');
        console.groupEnd();
        console.dir(对象);
        console.time('字符串1'),
        console.timeEnd('字符串1');  
       函数内写入: console.trace();可以看到被调用的情况;
