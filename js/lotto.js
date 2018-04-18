function gradeResult(){
	var myResult = parseInt(document.getElementById("value-English").value);
	var myResult = parseInt(document.getElementById("value-Irish").value);
	var myResult = parseInt(document.getElementById("value-Maths").value);
	
	var englishGrade, irishGrade, mathsGrade;
	if (!myEnglishResult){
		alert("Please enter a result");
	}
	else{
		if (myEnglishResultResult > 90){
			englishGrade = 'A';
		} else if (myEnglishResult> 80) { 
		englishGrade = 'B';
		} else {
			englishGrade = 'F';
		}
		
		var message = 'Your result of' + englishGrade + 'gets you a grade' + englishGrade
		gradeconsole.log(message);
		document.getElementById("result sentence").innerHTML = message;
	}

if (!myIrishResult){
		alert("Please enter a result");
	}
	else{
		if (myIrishResult > 90){
			irishGrade = 'A';
		} else if (myResult> 80) { 
		irishGrade = 'B';
		} else {
			grade = 'F';
		}
		
		var message = 'Your result of' + irishGrade + 'gets you a grade' + irishGrade
		gradeconsole.log(message);
		document.getElementById("result sentence").innerHTML = message;
	}

if (!myMathsResult){
		alert("Please enter a result");
	}
	else{
		if (myMathsResult > 90){
			mathsGrade = 'A';
		} else if (myResult> 80) { 
		mathsGrade = 'B';
		} else {
			mathsGrade = 'F';
		}
		
		var message = 'Your result of' + mathsGrade + 'gets you a grade' + mathsGraderade
		gradeconsole.log(message);
		document.getElementById("result sentence").innerHTML = message;
	}
}
		
			







