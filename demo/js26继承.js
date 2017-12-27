function Person(){
	this.species = "person";
	this.meal = function(){
		document.writeln("Person meal <br>");
	}
}

function Student(name,age){
	Person.apply(this,arguments);
	this.name = name;
	this.age = age;
	this.study = function(){
		document.writeln("Student study <br>");
	}
}

var student = new Student("张星星","18");
document.writeln("student species = "+student.species+"<br>");
document.writeln("student name = "+student.name+"<br>");
document.writeln("student age = "+student.age+"<br>");
student.meal();
student.study();

function Animal(){
	
}

Animal.prototype.species = "Animal";
Animal.prototype.meal = function(){
	document.writeln("Animal meal <br>");
}

function Dog(name, color){
	this.name = name;
	this.color = color;
	this.eat = function(){
		document.writeln("dog eat food <br>");
	}
}

var nullFunction = function(){};
nullFunction.prototype = Animal.prototype;
Dog.prototype = nullFunction.prototype;
Dog.prototype.constructor = Dog;

var dog = new Dog("wangwang black","black");
document.writeln(" dog species = "+dog.species+"<br>");
document.writeln(" dog name = "+dog.name+"<br>");
document.writeln(" dog color = "+dog.color+"<br>");
dog.meal();
dog.eat();

function Food(id,name){
	this.id = id;
	this.name = name;
}

function printFood(f){
	if(typeof f =="object" && typeof f.id == "number"){
		document.writeln(" food id = "+f.id+" , name = "+f.name+"<br>");
	}else{
		document.writeln(" 输入的类型不是food<br>");
	}
}

var food = new Food(1111,"汉堡包");
printFood(food);
