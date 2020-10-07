var audio = new Audio('music/theme.mp3');
start();
addButtonSnow();
resize();
//By Body ON Attriv

function resize(){
	document.getElementById("head").style.height = window.innerHeight + "px";

}


function start() {
	audio.loop = true;
}

var lastX;

function onscroll(){
	restartAnimByScroll(document.getElementById("a1"));
	//restartAnimByScroll(document.getElementById("a_avatar", lastB));
	//restartAnimByScroll(document.getElementById("#a_info", lastC));
}

var isSnowing = false;

function addSnow(){
	if(isSnowing){
		document.getElementById('snow').id = '';
		isSnowing = false;
		audio.pause();
	}else{
		var d = document.createElement('div');
		d.id = 'snow';
		document.getElementsByTagName('body')[0].appendChild(d);
		isSnowing = true;
		audio.play();
	}
}

function setVolume(v){
	audio.volume = v;
}

function addButtonSnow(){
	var d = document.createElement('div');
	d.id = 'sButt';
	document.getElementById('menu').appendChild(d);
	document.getElementById('sButt').innerHTML = '<button onclick="addSnow();"></button>';
	//var s = document.createElement('audio');
	//s.src = "music/theme.mp3";
	//document.getElementById('menu').appendChild(s);
}

//Other



function doSomething(){
	var scrollPos = (window.pageYOffset || document.scrollTop);
	if(scrollPos > 0)
		console.log(scrollPos);
	var x = isScrolledIntoView(document.getElementById("head"));
	if(x) console.log("y");
	else console.log("n");

	

}


//Logic

function restartAnimByScroll(elm){
	var x = isScrolledIntoView(elm);
	if(x){
	 if(lastX == "n"){
	  console.log("now");
	  restartAnim(elm);
	}
	 console.log("y");
	 lastX = "y";
	}
	else{ 
		console.log("n");
		lastX = "n";
	}
}

function restartAnim(elm){
	var newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);
}

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}