var today = new Date();
var hourNow =today.getHours();
var greeting;

if(hourNow > 18){
		greeting = "Good Evening, are you reading?"
	} else if (hourNow > 12){
		greeting = "Good Afternoon, forget work, read"
	} else if (hourNow > 0) {
		greeting = "Still too early for this"
	}
	else {
		greeting = "READ"
	}
		
document.write('<h3>' + greeting + '</h3>');