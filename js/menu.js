m_hide();

function m_show(){
	document.getElementById("m_bg").style.height = "100%";
	animAgain(document.getElementById("m_menu"));
}

function m_hide(){
	document.getElementById("m_bg").style.height = "0";
}


function animAgain(elm){
	var newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);
}