var uName = document.querySelector("#name");
var email = document.querySelector("#email");
var mobile = document.querySelector("#contact");
var country = document.querySelector("#country");
var childName = document.querySelector("#child-name");
var age = document.querySelector("#age");
var error = document.querySelector("#error");

function validate() {
    if (uName.value === "") {
        error.innerHTML = "Please enter your name";
        return false;
    }
    else if (email.value === "") {
        error.innerHTML = "Please enter your email";
        return false;
    }
    else if (email.value.indexOf("@") === -1) {
        error.innerHTML = "Please enter a valid email";
        return false;
    }
    else if (mobile.value.length != 11) {
        error.innerHTML = "Please enter a valid mobile number";
        return false;
    }
    else if (country.value === "--Choose--") {
        error.innerHTML = "Please choose your country";
        return false;
    }
    else if (childName.value === "") {
        error.innerHTML = "Please enter the child's name";
        return false;
    }
    else if (age.value === "") {
        error.innerHTML = "Please enter the child's age";
        return false;
    }
    else if (!document.querySelector("form").checkValidity()) {
        error.innerHTML = "";
        document.querySelector("form").reportValidity();
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}
