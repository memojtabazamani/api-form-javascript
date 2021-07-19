var userNameText = document.getElementById("userNameText");
var helpBlock = document.getElementById("userNameHelpBlock");

var ageText = document.getElementById("ageText");
var ageTextHelpBlock = document.getElementById("ageTextHelpBlock");

function validationForm(e) {
	helpBlock.innerHTML = ageTextHelpBlock.innerHTML = "";
	if(!userNameText.checkValidity()) {
		helpBlock.innerHTML = userNameText.validationMessage;
	}
	if(!ageText.checkValidity()) {
		ageTextHelpBlock.innerHTML = ageText.validationMessage;
	}
}