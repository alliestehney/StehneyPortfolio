function showInput() {
	alert("Thanks, "+ document.getElementById("nameinput").value + ", for your submission! I'll get back to you as soon as I can.")
}

function submit_form_by_id() {
	var name = document.getElementById("nameinput").value;
	var email = document.getElementById("emailinput").value;
	if (formValidation()) {
		document.getElementById("contact").submit();
		showInput();
	}
}

function formValidation() {
	var name = document.getElementById("nameinput").value;
	var email = document.getElementById("emailinput").value;
	var message = document.getElementById("messageinput").value;
	if(name === '' || email === '' || message === '') {
		alert("Please fill out every field!");
		return false;
	}else {
		return true;
	}
}

function makeBigger() {
	var ps = document.getElementById('ps');
	ps.style.fontSize = "32px";
}