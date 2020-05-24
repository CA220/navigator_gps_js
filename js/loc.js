
if( navigator.geolocation ) {
//Geolocation is not supported by your browser
// 支援GPS地理定位

document.getElementById("posStr").innerHTML="Loading";
navigator.geolocation.getCurrentPosition( geoYes, geoNo);
}
else {
alert("Geolocation is not supported by your browser");
}
function geoYes(evt){
//alert(evt);
str = "緯度" + evt.coords.latitude;
str += "<br />經度" + evt.coords.longitude;
str += "<br />精確度" + evt.coords.accuracy;
str += "<p /><a href=\"https://www.google.com/maps?q="+evt.coords.latitude+","+evt.coords.longitude+"&shorturl=\">Google map </a>";
// str += 等於=> str = str+....
document.getElementById("posStr").innerHTML=str;
document.getElementById("map").src="https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q="+evt.coords.latitude+","+evt.coords.longitude+"&z=16&output=embed&t="
}

function geoNo(evt){
document.getElementById("posStr").innerHTML="GPS取得失敗";
}
