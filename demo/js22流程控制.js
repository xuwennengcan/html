var number1 = 123;
if(number1>100){
	document.writeln(number1+">100");
}

var age = prompt("请输入您的年龄");
age = parseInt(age);
if(age>=18){
	document.writeln("<br>您好，欢迎您的光临");
}else{
	document.writeln("<br>未满十八周岁勿入<br>");
}

var number=prompt("请问你有几个女朋友?");
   number=parseInt(number);
    if (number<0) {
      document.write("严肃点，我们这搞社会调查呢<br>");
    }else if(number==0){
      document.write("单身狗，不要哭；妹子会有的<br>");
    }else if(number>0&&number<2){
      document.write("祝福你和你的女朋友<br>");
    }else{
      document.write("哥们，你不止一个女朋友啊；分我一个呗！<br>");
    }

var name=prompt("请输入你最喜欢的电影明星");
   switch(name){
        case "范冰冰":
        document.write("范冰冰很漂亮喔"+"<br>");
        break;
        case "杨幂":
        document.write("杨幂是个白富美"+"<br>");
        break;
        case "柳岩":
        document.write("柳岩性感十足！"+"<br>");
        break;
        case "空空":
        document.write("敬爱的人民教育家"+"<br>");
        break;
        default:
        document.write("请您输入其他明星"+"<br>");
        break;
   }

try{
	for (var i = 5; i >= 0; i--) {
		document.writeln(i+"<br>");
		if(i==3){
			throw new Error("错误信息i=3");
		}
	}
}catch(e){
	document.writeln(e.message+" <br> catch <br>");
}finally{
	document.writeln("请您稍后重试");
}

