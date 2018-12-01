function linkclicked() {
	document.getElementById('news-list').style.display = 'none';
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