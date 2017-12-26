var num1 = 9527;
var num2 = 0x22;
var num3 = 0124;
document.writeln("num1 = "+num1);
document.writeln("<br>num2 = "+num2);
document.writeln("<br>num3 = "+num3);

var str1 = "hello";
var str2 = "world";
document.writeln("<br>str1 = "+str1);
document.writeln("<br>str2 = "+str2);

var b1 = true;
var b2 = false;
document.writeln("<br>b1 = "+b1);
document.writeln("<br>b2 = "+b2);

var age = 25;
var pai = 3.14;
document.writeln("<br>原本的数据类型："+typeof(age));
document.writeln("<br>原本的数据类型："+typeof(pai));
age = String(age);
pai = pai.toString(pai);
document.writeln("<br>现在的数据类型："+typeof(pai));
document.writeln("<br>现在的数据类型："+typeof(pai));

