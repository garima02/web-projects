var image = document.querySelector("img")

image.onclick = function() {
	var imgSrc = image.getAttribute("src")
	if(imgSrc==="images/singapore-skyline.jpg"){
		image.setAttribute("src","images/singapore-nightlife.jpg")
		image.setAttribute("alt","Singapore Nightlife")
	}
	else{
		image.setAttribute("src","images/singapore-skyline.jpg")
		image.setAttribute("alt","Singapore Skyline")
	}
}
var heading = document.querySelector("h1")
var button = document.querySelector("button")

function setUserName() {
	var userName = prompt('Please enter your name.')
	localStorage.setItem("userName",userName)
	heading.textContent = "Singapore is a global hub, " + userName
}

if(!localStorage.getItem("userName")){
	setUserName();
}
else{
	var storedName = localStorage.getItem("userName")
	heading.textContent = "Singapore is a global hub, " + storedName
}

button.onclick = function() {
	setUserName()
}


