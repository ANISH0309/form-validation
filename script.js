function formValidation() {
	var stuName = document.getElementById("name").value;
	var regNo = document.getElementById("regNo").value;
	var dob = document.getElementById("dob").value;
	var program = document.getElementById("program").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;

	if (phoneValidation(phone)) {
		if (alphaNumeric(regNo)) {
			if (emailValidation(email)) {
				if (nameValidation(stuName) && nameRange(stuName, 30)) {
					alert("Form submitted Successfully!");
					console.log("Name: " + stuName);
					console.log("Reg No: " + regNo);
					console.log("DOB: " + dob);
					console.log("Program: " + program);
					console.log("Email: " + email);
					console.log("Phone: " + phone);
				}
			}
		}
	}
	return false;
}

function phoneValidation(phone) {
	var phoneCheck = /^\d{10}$/;
	if (phone.match(phoneCheck)) {
		return true;
	} else {
		alert("Please enter a 10 digit mobile number");
		return false;
	}
}

function alphaNumeric(regNo) {
	var alphaNumericCheck = /^[0-9a-zA-Z]+$/;
	if (regNo.match(alphaNumericCheck)) {
		return true;
	} else {
		alert("Registration Number must have alphanumeric characters only");
		return false;
	}
}

function emailValidation(email) {
	var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.match(emailCheck)) {
		return true;
	} else {
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}

function nameValidation(name) {
	var nameCheck = /^[A-Za-z\s]+$/;
	if (name.match(nameCheck)) {
		return true;
	} else {
		alert("Student Name must have alphabet characters only");
		uname.focus();
		return false;
	}
}

function nameRange(stuName, maxlength) {
	var stuName = document.getElementById("name").value;
	if (stuName.length <= maxlength) {
		return true;
	} else {
		alert("The max length can only be till 30 characters");
		return false;
	}
}
