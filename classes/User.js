//En klasse med username og password
class User {
    constructor(username, password, name, birthYear, gender, phoneNumber, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

    unpackUsers();
    storeUsers();

    // Opretter og gemmer en ny User i et array, som derefter sendes til localStorage, hvis de givne parametre overholdes
    function createUser() {
        unpackUsers();
        if (checkAtSign()
            && checkPassNum()
            && checkNumberLength()
            && checkAvailability()
        ){
            let user = new User(
                document.getElementById("username").value,
                document.getElementById("password").value,
                document.getElementById("name").value,
                document.getElementById("birthYear").value,
                getUserGender(),
                document.getElementById("phoneNumber").value,
                document.getElementById("email").value


            );
            allUsers.push(user);
            storeUsers();
            console.log(localStorage);
            alert("New user has been created.");
        } else {
            alert("Username is already taken")
        }
    }

// Logger brugeren ind i systemet
function login(){
    if(checkUserLogin()){
        alert("You're now logged in");
    } else {
        alert("Wrong Username or Password");
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

// Tjekker om email-input indeholder et @ og dermed ligner en email
function checkAtSign(){
        if(document.getElementById("email").value.includes("@")) {
            return true;
    }
        else alert("This doesn't look like an email");
}

// En funktion som tjekker om password er mindst 6 cifre
function checkPassNum() {
    if(document.getElementById("password").value.length >= 6) {
        return true;
    }
    else alert("Your password is too short");
}

// En funktion som tjekker om telefon nummeret er 8 cifre
function checkNumberLength() {
    if(document.getElementById("phoneNumber").value.length === 8) {
        return true;
    }
    else alert("Not right phone number");
}

// Tjekker om Username allerede er i brug
function checkAvailability(){
        return !allUsers.some(user => user.username == document.getElementById("username").value);
}

// Tjekker om det givne Username og Password stemmer overens med DB'en
function checkUserLogin() {
    unpackUsers();
    for (var n = 0; n <= allUsers.length - 1; n++) {
        if(allUsers[n].username === document.getElementById("enteredName").value && allUsers[n].password === document.getElementById("enteredPass").value){
            return true;
        }
    }
    storeUsers();
}

// Finder radiobutton-værdien fra vores html dokument
function getUserGender() {
        var genderButtons = document.getElementsByClassName("gender");
        var userGender = "";

        for(n=0; n <= genderButtons.length - 1; n++){
            if(genderButtons[n].checked){
                userGender = genderButtons[n].value;
            }
        }
        return userGender;
}

