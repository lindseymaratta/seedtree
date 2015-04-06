		// Validating Empty Field
		function check_empty() {
		if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
		alert("Fill All Fields !");
		} else {
		document.getElementById('form').submit();
		alert("Form Submitted Successfully...");
		}
		}
		//Function To Display Popup
		function div_show1() {
		document.getElementById('SignUp').style.display = "block";
		}
		//Function to Hide Popup
		function div_hide1(){
		document.getElementById('SignUp').style.display = "none";
		}

		//Function To Display Popup
		function div_show2() {
		document.getElementById('SignIn').style.display = "block";
		}
		//Function to Hide Popup
		function div_hide2(){
		document.getElementById('SignIn').style.display = "none";
		}