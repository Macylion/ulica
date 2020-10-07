function starto() {
 	document.getElementById('g_cont').innerHTML = '';
 	var inside = "";
 	for (var i = 1; i < 18; i++){
 		inside += '<div class="g_img"><div class="preview" onclick="zoom('+i+');"></div><img src="pics/'+i+'.jpg"></div>';
 	}
 	document.getElementById('g_cont').innerHTML = inside;
 } 

function zoom(x){
	if(x == '0'){
		document.getElementById('z_cont').style.display = "none";
	}else{
		document.getElementById('z_cont').style.display = "block";
		document.getElementById('zoom_img').src = "pics/" + x + ".jpg";
	}
}