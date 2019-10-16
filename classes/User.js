//En klasse med username og password
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

    unpackUsers();
    storeUsers();

    function createUser() {
        unpackUsers();
        if (checkAtSign()
            && checkPassNum()
            && checkNumberLength()
            && checkAvailability()
        ){
            let user = new User(
                document.getElementById('user').value,
                document.getElementById('password').value
            );
            allUsers.push(user);
            storeUsers();
            console.log(localStorage);
            alert('New user has been created.');
        } else {
            alert("Username is already taken")
        }
    }

// Gemmer alle brugere som et array i localStorage
function storeUsers() {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

// Henter alle brugere som et array fra localStorage
function unpackUsers() {
        if(JSON.parse(localStorage.getItem("allUsers") === null)){
            allUsers = [];
        } else {
            allUsers = JSON.parse(localStorage.getItem("allUsers"));
        }
}

function checkLogin() {
    checkLogin();
    {
// Stored data from the registration form
        var storedName = localStorage.getItem('username');
        var storedPass = localStorage.getItem('password');
        // Stored data from the registration form
        var storedName = localStorage.getItem('username');
        var storedPass = localStorage.getItem('password');
// Entered data in the login form
        var enteredName = document.getElementById('enteredName');
        var enteredPass = document.getElementById('enteredPass');
        // Entered data in the login form
        var enteredName = document.getElementById('enteredName');
        var enteredPass = document.getElementById('enteredPass');
// Check if stored data from registration form is equal to entered data from login form
        if (enteredName.value == storedName && enteredPass.value == storedPass) {
            alert('You are logged in.');
        } else {
            alert('Error. Wrong login.');
            // Check if stored data from registration form is equal to entered data from login form
            if (enteredName.value == storedName && enteredPass.value == storedPass) {
                alert('You are logged in.');
            } else {
                alert('Error. Wrong login.');
            }
        }
    }
}

// Tjekker om email-input indeholder et @ og dermed ligner en email
function checkAtSign(){
        if(document.getElementById('email').value.includes("@")) {
            return true;
    }
        else alert("This doesn't look like an email");
}

// En funktion som tjekker om password er mindst 6 cifre
function checkPassNum() {
    if(document.getElementById('password').value.length >= 6) {
        return true;
    }
    else alert("Your password is too short");
}

// En funktion som tjekker om telefon nummeret er 8 cifre
function checkNumberLength() {
    if(document.getElementById('phoneNumber').value.length === 8) {
        return true;
    }
    else alert("Not right phone number");
}

function checkAvailability(){
        return !allUsers.some(user => user.username == document.getElementById("user").value);
}