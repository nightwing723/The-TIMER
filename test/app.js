var timer;
var t;

function startTimer() {
	timer = prompt("Set Countdown");
	timedCount();
};

function timedCount(){
	document.getElementById('clock').innerHTML = timer;
	if (timer === 0) {
		alert("Times Up!");
	} else {
	timer--;
	t = setTimeout(function(){timedCount()},1000);
	};
};