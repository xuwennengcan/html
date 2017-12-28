function Success(position){
	var longitude = position.coords.longitude;
	var latitude = position.coords.latitude;
	var timestamp = position.timestamp;
	alert(" timestamp = "+timestamp + " , longitude = "+longitude+ " , latitude = "+latitude);
}

function Error(error){
	alert(error.code+" , "+error.message);
}

var options={
	timeout:10000
}

if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(Success,Error,options);
}else{
	alert("您的浏览器不支持定位")
}