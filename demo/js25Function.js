var add = function(a,b){
	var c = a+b;
	document.writeln(a+"+"+b+"="+c+"<br>");
}
add(1,2);
var result = add instanceof Function;
var str = result===true?"是":"否";
document.writeln("add函数是否为Function对象的实例:"+str+" length = "+add.length+"<br>");

var Dog = function(name,color){
	this.name = name;
	this.color = color;
}
Dog.prototype.type = "犬科";
Dog.prototype.eat = function(){
	document.writeln("Dog eat food"+"<br>");
};
var white = new Dog("small","white");
var black = new Dog("big","black");
white.eat();
black.eat();

var name1 = "哆啦A梦";
var boy = {name1:"叮当猫"};
function lalala(message){
	document.writeln(message+" , my name is "+this.name1+"<br>");
}
lalala("hello");
lalala.call(this,"hello");
lalala.call(boy,"good");

