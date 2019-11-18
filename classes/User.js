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
        this.classes = [];
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
                document.getElementById("email").value,
                []


            );
            allUsers.push(user);
            storeUsers();
            console.log(localStorage);
            alert("New user has been created.");
        } else if(!checkAvailability()) {
            alert("Username is already taken.")
        }
    }

// Logger brugeren ind i systemet, hvis parametrene er opfyldt og alerter følgende: "You're now logged in". Hvis parametrene ikke er opfyldt alerter den følgende:
//"Wrong Username or Password".
function userLogin(){
    if(checkUserLogin()){
        alert("You're now logged in");
        storeLoggedInUser();
        window.location.href = "MyPageUser.html";
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

// En funktion som tjekker om password er mindst 5 cifre
function checkPassNum() {
    if(document.getElementById("password").value.length >= 5) {
        return true;
    }
    else alert("Your password is too short. It needs to be at least 5 digits.");
}

// En funktion som tjekker om telefon nummeret er 8 cifre
function checkNumberLength() {
    if(document.getElementById("phoneNumber").value.length === 8) {
        return true;
    }
    else alert("Not a real phone number. Please try again.");
}

// Tjekker om Username allerede er i brug
function checkAvailability(){
        return !allUsers.some(user => user.username == document.getElementById("username").value);
}

// Tjekker om det givne Username og Password stemmer overens med DB'en (databasen)
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

        for(n = 0; n <= genderButtons.length - 1; n++){
            if(genderButtons[n].checked){
                userGender = genderButtons[n].value;
            }
        }
        return userGender;
}
//Laver en for loop som kører igennem hele user-arrayet indtil den finder den user som er blevet logget ind.
function storeLoggedInUser(){
        unpackUsers();
        var loggedInUser;
        for(var n = 0; n<allUsers.length; n++){
            if(document.getElementById("enteredName").value === allUsers[n].username) {
                loggedInUser = allUsers[n];
            }
        }
        sessionStorage.setItem("loggedInUser",JSON.stringify(loggedInUser));
        storeUsers();
}
//Henter user fra storage vha. parse.
function unpackLoggedInUser(){
        var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
}
//Sletter alle users der er logget ind fra session storage.
function logOutUser(){
    sessionStorage.clear();
    window.location.href = "Login.html";
}

function subscribeClass(id){
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    var allClasses = JSON.parse(localStorage.getItem("allClasses"));
    var allUsers = JSON.parse(localStorage.getItem("allUsers"));

    for(var n = 0; n < allClasses.length; n++) {
        if (id.replace(" tilmeld", "") === allClasses[n].title) {
            allClasses[n].participants.push(loggedInUser);

            for(var i = 0; i < allUsers.length; i++) {
                if(loggedInUser.username === allUsers[i].username) {
                    allUsers[i].classes.push(allClasses[n]);
                    loggedInUser = allUsers[i];
                }
            }
        }
    }
    localStorage.setItem("allClasses", JSON.stringify(allClasses));
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    window.location.reload();
}

function unsubscribeClass(id) {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    var allClasses = JSON.parse(localStorage.getItem("allClasses"));
    var allUsers = JSON.parse(localStorage.getItem("allUsers"));

    for(var n = 0; n < allClasses.length; n++) {
        if(id.replace(" afmeld", "") === allClasses[n].title) {
            for(var i = 0; i < allClasses[n].participants.length; i++) {
                if(allClasses[n].participants[i].username === loggedInUser.username) {
                    allClasses[n].participants.splice(i, 1);

                    for(var j = 0; j < allUsers.length; j++) {
                        if(allUsers[j].username === loggedInUser.username) {
                            for(var h = 0; h < allUsers[j].classes.length; h++) {
                                if(allUsers[j].classes[h].title === allClasses[n].title) {
                                    allUsers[j].classes.splice(h, 1);
                                    loggedInUser = allUsers[j];
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    localStorage.setItem("allClasses", JSON.stringify(allClasses));
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    window.location.reload();
}