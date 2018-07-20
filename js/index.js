window.onload = function() {
	// var w = document.documentElement.clientWidth || document.body.clientWidth;
	var h = document.documentElement.clientHeight || document.body.clientHeight;
	var container = document.getElementById('container');
	container.style.minHeight = h + 'px';
	var realcon = document.getElementById('realcon');
	realcon.style.minHeight = h + 'px'; 

}