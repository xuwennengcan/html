var arr = [1,"hello",true,9527];
var len = arr.length;
document.write("len = "+len+" , arr[1] = "+arr[1]+" , arr[2] = "+arr[2]);

var arr1 = ["你好","hello",0911];
var arr2 = ["大家好","hello everyone",2.02];
var arr3 = arr1.concat(arr2);
for (var i = 0; i<arr3.length; i++) {
	document.writeln("<br>"+"arr3["+i+"] = "+arr3[i]);
}

var str = arr.join(",");
document.writeln("<br> str = "+str);

var arr_sort = [9,5,2,6];
arr_sort.sort(function(a,b){
	return a-b<0;
})
document.writeln("<br>"+arr_sort);

arr_sort.push(1, 2);
document.writeln("<br>"+arr_sort);

arr_sort.pop();
document.writeln("<br>"+arr_sort);


