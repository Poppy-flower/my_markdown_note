[TOC]
#### 第一章 javascript简介
1. javascript是函数式编程语言，非常适合用来学习数据结构与算法。
2. Web服务器 XAMPP
3. 使用Node搭建Web服务器
   * 安装Node.js
   * Mac用管理员身份执行下述命令：
     sudo npm install http-server -g
4. 操作符&& 与 &的区别：
   * &&是逻辑操作符
   * &是位操作符
5. typeof操作符可以返回变量或表达式的类型
```
console.log(typeof 1); //number
console.log(typeof 'abc'); //string
console.log(typeof true); //boolean
console.log(typeof [1,2,3]); //object
console.log(typeof {'a':1}); //object
```
6. 真值和假值
转换成假值的有：
    * undefined
    * null
    * 空字符串
    * 数字中的 +0、-0、NaN
7. 相等操作符（== 和 ===）
  * ==会包含着隐式的类型转换再比较
     undefined == null，返回true
    （1）任何类型和布尔值比较，布尔值都会转成数字
    （2）字符串和数字比较，字符串会转成数字
  * ===操作符，在比较对象时，对象必须是对同一个对象的引用，才返回 true
8. javascript面向对象编程
```
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
var book = new Book('title', 'pages', 'isbn');
//类可以声明函数
Book.prototype.printTitle = function(){
    console.log(this.title);
}
//也可以直接在类里面声明
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function(){
        console.log(this.isbn);
    }
}
```
> 在原型的例子里，printTitle函数只会创建一次，在所有的实例中共享。如果在类的定义里声明，就像前面的例子一样，则会在每个实例都会创建自己的函数副本。使用原型方法可以节约内存和降低实例化的开销。

9. ES6的新功能
    1. 用let代替var变量声明，let变量作用域
    2. const常量，只读
    3. 模板字面量`${name}欢迎你回家！`
    4. 箭头函数 ()=>{}
    5. 函数的参数默认值
    ```
        function sum(a=2, b=3){
            return a+b
        }
        sum(5); //输出8
    ```
    6. 声明展开和剩余参数（...）
    ```
     //将获取的参数转化成数组
     function restParamaterFunction(x, y){
        var a = Array.prototype.slice.call(arguments, 2);
        return (x+y)*a.length
     }

     //或者
     function restParamaterFunction(x, y, ...a){
        return (x+y)*a.length
     }
    ```
    7. 增强的对象属性 -- 解构
    8. 使用类进行面向对象编程
    ```
        class Book{
            constructor(title, pages, isbn){
                this.title = title;
                this.pages = pages;
                this.isbn = isbn;
            }
            printTitle(){
                console.log(this.title);
            }
        }
    ```

    继承extends
    ```
        class ITBook extends Book{
            constructor(title, pages, isbn, technology){
                super(title, pages, isbn);
                this.technology = technology;
            }
        }
    ```

10. ES7的新功能
    Array.prototype.includes
