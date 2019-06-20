const submit = document.querySelector("input[type='submit']");
const firstName = document.querySelector("input[name='first-name']");
const firstNameMsg = document.querySelector("#first-name-msg");
const lastName = document.querySelector("input[name='last-name']");
const lastNameMsg = document.querySelector("#last-name-msg");
const email = document.querySelector("input[name='email']");
const emailMsg = document.querySelector("#email-msg");
const password = document.querySelector("input[name='password']");
const passwordMsg = document.querySelector("#password-msg");
const valids = [false, false, false, false]; // store validity of each input

firstName.addEventListener("input", checkFirstName);
firstName.addEventListener("click", checkFirstName);
lastName.addEventListener("input", checkLastName);
lastName.addEventListener("click", checkLastName);
email.addEventListener("input", checkEmail);
password.addEventListener("input", checkPassword);

function checkFirstName() {
    if (this.value == "") {
        this.classList.add("invalid");
        valids[0] = false;
        
        firstNameMsg.classList.remove("hide");
    } else {
        this.classList.remove("invalid");
        valids[0] = true;

        firstNameMsg.classList.add("hide");
    }

    checkValids();
}

function checkLastName() {
    if (this.value == "") {
        this.classList.add("invalid");
        valids[1] = false;

        lastNameMsg.classList.remove("hide");
    } else {
        this.classList.remove("invalid");
        valids[1] = true;

        lastNameMsg.classList.add("hide");
    }

    checkValids();
}

function checkEmail() {
    if (this.value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) != -1) {
        this.classList.remove("invalid");
        valids[2] = true;

        emailMsg.classList.add("hide");
    } else {
        this.classList.add("invalid");
        valids[2] = false;

        emailMsg.classList.remove("hide");
    }

    checkValids();
}

function checkPassword() {
    if (this.value.length < 8 || this.value.length > 16) {
        this.classList.add("invalid");
        valids[3] = false;
        
        passwordMsg.classList.remove("hide");
    } else {
        this.classList.remove("invalid");
        valids[3] = true;

        passwordMsg.classList.add("hide");
    }

    checkValids();
}

// if all inputs are valid, enable submit button
function checkValids() {
    if (valids.indexOf(false) == -1) {
        submit.removeAttribute("disabled");
        submit.classList.remove("disable");
    } else {
        submit.setAttribute("disabled", true);
        submit.classList.add("disable");
    }
}