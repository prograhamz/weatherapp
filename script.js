// jquery.com
// simpleweatherjs.com

$(document).ready(function() {

$("#coldWeather").hide();
$("#badWeather").hide();
$("#warmWeather").hide();    
    
	$.simpleWeather({
		location: '01607',
		unit: 'f',
		success: function(weather) {
		
		// Example
		var weatherTemp = weather.temp;
		//alert(weatherTemp);
        $("#temp").text(weatherTemp);
            
       var weatherCode = weather.code;
        //$("body").text(weatherCode)

            // cold & snowy weather
            if(weatherTemp >= 0 && weatherTemp <= 45) {
                    $("#coldWeather").show();
                    $("#badWeather").show();
                    $("#warmWeather").hide();
                
            }
            // warm weather 
            else if(weatherTemp >= 46 && weatherTemp <= 80) {
                // alert("warm");
                    $("#coldWeather").hide();
                    $("#badWeather").hide();
                    $("#warmWeather").show();
                
            }
            
            // hot weather
            else if(weatherTemp >= 81 && weatherTemp <= 180) {
                if(weatherCode == 36) {
                    $("#coldWeather").hide();
                    $("#badWeather").hide();
                    $("#warmWeather").show();    
                }
            }
            
            // bad weather hurricanes, dangerous weather, rain
            if(weatherCode == 0 || weatherCode == 1 || weatherCode == 3 || weatherCode == 4 || weatherCode == 41 || weatherCode == 42 || weatherCode == 43 || weatherCode == 45 || weatherCode == 46 || weatherCode == 13 || weatherCode == 14 || weatherCode == 15 || weatherCode == 16 || weatherCode == 17) {
                $("#coldWeather").hide();
                $("#badWeather").show();
                $("#warmWeather").hide();  
            }
	},

	error: function(error) {
		alert("Error");
	}
            
}); // end simpleWeather
		
});