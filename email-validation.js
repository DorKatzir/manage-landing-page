

function ValidateEmail(e, inputText) {
	e.preventDefault()
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (inputText.value.match(mailformat)) {
		console.log('Valid email address!')
		// document.form1.text1.focus()
		return true
	} else {
		console.log('You have entered an invalid email address!')
		// document.form1.text1.focus()
		return false
	}
}
