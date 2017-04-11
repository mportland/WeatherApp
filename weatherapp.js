
var btn = document.getElementById("btn");
var weather = document.getElementById("WeatherInfo");
btn.addEventListener("click", function(){  
	var request = new XMLHttpRequest();
	request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Portland,us&appid=");
	request.onload = function(){	//parse through Json data and render to the Html file 
		var Data = JSON.parse(request.responseText);
		renderHtml(Data);
		console.log(Data);
	};
	
	request.send();
	});




function renderHtml(Data){
	var APIData = ""
	for (var i = 0; i < Data.length; i++) {
		APIData += "<p>" + Data[i] + "<p>"
	}
	// APIData += "<p>" + Data[1].description + "</p>"
weather.insertAdjacentHTML("beforeend", APIData);
}
