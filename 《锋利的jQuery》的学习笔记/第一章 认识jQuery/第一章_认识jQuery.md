[TOC]
#### 第一章 认识jQuery

##### 1.2.2 jQuery的优势
1. 轻量级。
2. 强大的选择器。
3. 出色的DOM操作的封装。
4. 可靠的时间处理机制。
5. 完善的Ajax。
6. 不污染顶级变量。
7. 出色的浏览器兼容性。
8. 链式操作方式。
9. 隐式迭代。
10. 行为层与结构层分离。
11. 丰富的插件支持。
12. 完善的文档。
13. 开源。

##### 1.3.2 window.onload 与 $(document).ready()的对比
||window.onload|$(document).ready()|
|--|--|--|
|执行时机|必须等待网页中所有的内容加载完成之后|网页中所有的DOM结构绘制完成之后就执行，可能DOM关联的东西并没有加载完|
|编写个数|不能同时编写多个|能同时编写多个|
|简化方法|无|可以简化成：$(function(){});|

##### 1.4.2 jQuery对象 和 DOM对象的相互转换

* jQuery对象 转化成 DOM对象

(1)jQueryObj[0]

```
  var $cr = $("#cr");  //jQuery对象
  var cr = $cr[0];  //DOM对象

```
(2)使用jQuery的get()方法 jQueryObj.get(0)

```
  var $cr = $("#cr");  //jQuery对象
  var cr = $cr.get(0);  //DOM对象


```

* DOM对象 转化成 jQuery对象
直接使用$(DOM对象即可)
```
   var cr = document.getElementById("cr");  //DOM对象
   var $cr = $(cr);  //jQuery对象

```

##### 1.5 解决jQuery与其他库的冲突

1. jQuery库在其他库之后引入

   可以在任何时候调用 jQuery.noConflict()函数来将变量$的控制权移交给其他javascript库。
2. jQuery库在其他库之前引入



