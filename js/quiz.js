var isOK = false;

function setClass() {
	if(isOK == false){
		$("label").removeClass("lab");
		$("label").removeClass("labR");
		$("label").removeClass("labG");
		$('label:has(input[type=radio]:checked)').addClass("lab");
		$('label:has(input[type=checkbox]:checked)').addClass("lab");
	}
} 

function check(){
	$('label:has(input[type=radio]:checked)').removeClass("lab");
	$('label:has(input[type=radio]:checked)').addClass("labR");
	$('label:has(input[type=checkbox]:checked)').removeClass("lab");
	$('label:has(input[type=checkbox]:checked)').addClass("labR");

	var checkedBoxes = getCheckedBoxes("answer");
	var points = 0;
	var tmpA = 0;
	var tmpB = 0;
	
	for (var i = 0; i < checkedBoxes.length; i++) {
		
		document.getElementById('x1').classList.add('labG');
		document.getElementById('x2').classList.add('labG');
		document.getElementById('x3').classList.add('labG');
		document.getElementById('x4').classList.add('labG');
			
		//Points count
		//Radio
		if(checkedBoxes[i].value == "1" || checkedBoxes[i].value == "0"){
			points += parseInt(checkedBoxes[i].value);
		}
		//Check
		else if(checkedBoxes[i].value == "ab" || checkedBoxes[i].value == "ag"){
			if(checkedBoxes[i].value == "ag") tmpA++;
			if(checkedBoxes[i].value == "ab") tmpA--;
		}
		else if(checkedBoxes[i].value == "bb" || checkedBoxes[i].value == "bg"){
			if(checkedBoxes[i].value == "bg") tmpB++;
			if(checkedBoxes[i].value == "bb") tmpB--;
		}
		else{

		}

		//Edit class
		if(checkedBoxes[i].value == "1" || checkedBoxes[i].value == "ag" ||
			checkedBoxes[i].value == "bg"){
			checkedBoxes[i].parentElement.classList.remove('labR');
			checkedBoxes[i].parentElement.classList.add('labG');
		}
	}

	if(tmpA == 2) points++;
	if(tmpB == 2) points++;
	console.log('Points: ' + points);
	isOK = true;

	var word = "";

	if(points == 10) word = "Lepiej być nie mogło!";
	else if(points == 9) word = "Znakomicie!";
	else if(points == 8) word = "Bardzo dobrze!";
	else if(points == 7) word = "Lepiej niż dobrze!";
	else if(points == 6) word = "Dobrze!";
	else if(points == 5) word = "ani Dobrze ani Źle!";
	else if(points == 4) word = "Źle!";
	else if(points == 3) word = "Może następnym razem!";
	else if(points == 2) word = "Porażka!";
	else if(points == 1) word = "Jesteś beznadziejny!";
	else if(points == 0) word = "Gorzej być nie mogło!";

	document.getElementById('pp').style.display = "block";
	document.getElementById('ppp').innerHTML = "Uzyskane punkty: " + points + "/10 " + word;
}	

function getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  for (var i=0; i<checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i]);
     }
  }
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

function reset(){
	document.all.form1.reset();
	document.all.form2.reset();
	document.all.form3.reset();
	document.all.form4.reset();
	document.all.form5.reset();
	document.all.form6.reset();
	document.all.form7.reset();
	document.all.form8.reset();
	document.all.form9.reset();
	document.all.form10.reset();

	document.getElementById('pp').style.display = "none";
	points = 0;
	isOK = false;
	setClass();
}