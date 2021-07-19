var userNameText = document.getElementById("userNameText");
var helpBlock = document.getElementById("userNameHelpBlock");

var ageText = document.getElementById("ageText");
var ageTextHelpBlock = document.getElementById("ageTextHelpBlock");

function validationForm(e) {
	message = helpBlock.innerHTML = ageTextHelpBlock.innerHTML = "";
	if(userNameText.validity.valueMissing) {
		message = "Field must be entred";	
	} else if(userNameText.validity.patternMismatch) {
		message = "Field Pattern in invalid!";
	} else if(userNameText.validity.rangeOverflow) {
		message = "Field Greater than its max number.";
	} else if(userNameText.validity.rangeUnderflow) {
		message = "Field Less than its min.";
	} else if(userNameText.validity.toLong) {
		message = "Field value exceeds its maxLength attribute.";
	}

	userNameText.setCustomValidity(message);
	helpBlock.innerHTML = userNameText.validationMessage;
	
}