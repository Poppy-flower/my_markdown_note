[TOC]
#### 3.1 DOM操作的分类
1. DOM Core
2. HTML-DOM
3. CSS-DOM

#### 3.2 jQuery中的DOM操作
##### 3.2.1 查找节点
1. 查找元素节点
   $li.text()
2. 查找属性节点
   $para.attr("title")
##### 3.2.2 创建节点
1. 创建元素节点
```
   $li = $("<li></li>")
   $("ul").append($li);
```
2. 创建文本节点
```
   $("<li>雪梨</li>")
```
3. 创建属性节点
```
   $("<li title='雪梨'>雪梨</li>")
```
4. 删除节点
   * remove()
   * detach()
   * empty()
5. 复制节点
  clone()
6. 替换节点
  $("p").replaceWith("<strong>你最不喜欢的水果是？</strong>")
7. 包裹节点
 $("strong").wrap("<b></b>")
 wrapAll() wrapInner()