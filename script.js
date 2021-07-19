function validationForm(e) {
	var inputs = document.getElementsByTagName("input");
	// return;
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		var message = "";
		var blockHint = document.getElementById(input.name === "" ? input.id : input.name + "HelpBlock")
		if(input.validity.valueMissing) {
			message = "Field must be entred";	
		} else if(input.validity.patternMismatch) {
			message = "Field Pattern in invalid!";
		} else if(input.validity.rangeOverflow) {
			message = "Field Greater than its max number.";
		} else if(input.validity.rangeUnderflow) {
			message = "Field Less than its min.";
		} else if(input.validity.toLong) {
			message = "Field value exceeds its maxLength attribute.";
		}
		input.setCustomValidity(message);
		blockHint.innerHTML = message;
	}
}