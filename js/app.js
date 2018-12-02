function onready() {
	document.getElementById('web-iframe').src = 'about:blank';
	hidemenu();
}

function linkclicked(url) {
	document.getElementById('news-list').style.display = 'none';
	document.getElementById('web-iframe').src = url;
	document.getElementById('web-iframe').style.display = 'block';
	document.getElementsByClassName('reload')[0].innerHTML = "";
	document.getElementsByClassName("back")[0].innerHTML = "<";
	document.getElementsByClassName("back")[0].setAttribute("onclick", "backclicked();");
}

function backclicked() {
	document.getElementById('news-list').style.display = 'block';
	document.getElementById('web-iframe').style.display = 'none';
	document.getElementById('web-iframe').src = 'about:blank';
	document.getElementsByClassName('reload')[0].innerHTML = "&#x21bb;";
	document.getElementsByClassName("back")[0].innerHTML = "&#9776;";
	document.getElementsByClassName("back")[0].setAttribute("onclick", "menuclicked();");
}

function menuclicked() {
	document.getElementById('dialogback-menu').style.visibility = "visible";
	document.getElementById('dialogback-menu').style.opacity = "0.5";
	document.getElementById('menu').style.visibility = "visible";
	document.getElementById('menu').style.left = "0px";
	document.getElementsByClassName("back")[0].setAttribute("onclick", "hidemenu();");
	document.getElementsByClassName("back")[0].innerHTML = "<";
}

function hidemenu() {
	document.getElementById('menu').style.left = "-256px";
	document.getElementById('dialogback-menu').style.opacity = "0";
	document.getElementById('dialogback-menu').style.visibility = "hidden";
	document.getElementsByClassName("back")[0].setAttribute("onclick", "menuclicked();");
	document.getElementsByClassName("back")[0].innerHTML = "&#9776;";
}

function showpage(pageid) {
	var elements = document.getElementsByClassName('page');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}
	
	document.getElementById(pageid + '-page').style.display = "block";
	hidemenu();
}

function launchinsafari() {
	var iframeurl = document.getElementById("web-iframe").src;
	window.open(iframeurl);
	hidedropmenu(0);
}