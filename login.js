var email = document.querySelector("#loginEmail");
var ePass = document.querySelector("#loginPassword");
var error = document.querySelector("#error");

function validate() {
    if (email.value === "") {
        error.innerHTML = "Please enter your email";
        return false;
    }
    else if (email.value.indexOf("@") === -1) {
        error.innerHTML = "Please enter a valid email";
        return false;
    }
    else if (ePass.value === "" || ePass.value.length < 8) {
        error.innerHTML = "Your password must have at least 8 characters";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}
