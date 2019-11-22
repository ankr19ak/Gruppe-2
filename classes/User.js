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

    if(!isSubbed(id)) {
        for(var n = 0; n < allClasses.length; n++) {
            if(id.replace(" tilmeld", "") === allClasses[n].title) {
                allClasses[n].participants.push(loggedInUser);

                for(var i = 0; i < allUsers.length; i++) {
                    if(loggedInUser.username === allUsers[i].username) {
                        allUsers[i].classes.push(allClasses[n]);
                        loggedInUser = allUsers[i];
                    }
                }
            }
        }
    } else {
        alert("You are already signed up for this class");
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

function isSubbed(id) {
    var allClasses = JSON.parse(localStorage.getItem("allClasses"));
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    for(var n = 0; n < allClasses.length; n++) {
        if(id.replace(" tilmeld", "") === allClasses[n].title) {
            for(var i = 0; i < allClasses[n].participants.length; i++) {
                if (allClasses[n].participants[i].username === loggedInUser.username) {
                    return true;
                }
            }
        }
    }
}

function showMyClasses() {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    for (var n = 0; n < loggedInUser.classes.length; n++) {
        var header = document.createElement("h2");
        var headerText = document.createTextNode(loggedInUser.classes[n].title);
        header.append(headerText);
        document.getElementById("myClassesBody").append(header);

        var paraSted = document.createElement("P");
        var textSted = document.createTextNode("Sted: " + loggedInUser.classes[n].location);
        paraSted.appendChild(textSted);
        document.getElementById("myClassesBody").append(paraSted);

        var paraDato = document.createElement("P");
        var textDato = document.createTextNode("Dato: " + loggedInUser.classes[n].date + "/" + loggedInUser.classes[n].month + "/" + loggedInUser.classes[n].year);
        paraDato.appendChild(textDato);
        document.getElementById("myClassesBody").append(paraDato);

        var paraRoom = document.createElement("P");
        var textRoom = document.createTextNode("Lokale: " + loggedInUser.classes[n].room);
        paraRoom.appendChild(textRoom);
        document.getElementById("myClassesBody").appendChild(paraRoom);

        var paraTeacher = document.createElement("P");
        var textTeacher = document.createTextNode("Underviser: " + loggedInUser.classes[n].teacher);
        paraTeacher.appendChild(textTeacher);
        document.getElementById("myClassesBody").appendChild(paraTeacher);

        var paraDuration = document.createElement("P");
        var textDuration = document.createTextNode("Varighed: " + loggedInUser.classes[n].durationHours + " time(r) og " + loggedInUser.classes[n].durationMinutes + " minutte(r)");
        paraDuration.appendChild(textDuration);
        document.getElementById("myClassesBody").appendChild(paraDuration);

        var paraParticipants = document.createElement("P");
        var text = "Deltagere: ";
        for (var i = 0; i < loggedInUser.classes[n].participants.length; i++) {
            if (i + 1 === loggedInUser.classes[n].participants.length) {
                text += loggedInUser.classes[n].participants[i].name;
            } else {
                text += loggedInUser.classes[n].participants[i].name + ", ";
            }
        }
        var textParticipants = document.createTextNode(text);
        paraParticipants.appendChild(textParticipants);
        document.getElementById("myClassesBody").appendChild(paraParticipants);

        var unsubButton = document.createElement("input");
        unsubButton.setAttribute("id", loggedInUser.classes[n].title + " afmeld");
        unsubButton.setAttribute("value", "Afmeld");
        unsubButton.setAttribute("type", "Submit");
        unsubButton.setAttribute("onclick", "unsubscribeClass(this.id)");

        document.getElementById("myClassesBody").appendChild(unsubButton);

        var lineBreak = document.createElement("br");
        document.getElementById("myClassesBody").appendChild(lineBreak);
        var lineBreak2 = document.createElement("br");
        document.getElementById("myClassesBody").appendChild(lineBreak2);
    }
}

function showMyPageInfo() {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

        document.getElementById("navn").innerHTML = "Navn: " + loggedInUser.name;
        document.getElementById("fødselsÅr").innerHTML = "Årgang: " + loggedInUser.birthYear;
        document.getElementById("køn").innerHTML = "Køn: " + loggedInUser.gender;
        document.getElementById("telefonNr").innerHTML = "Telefon nummer: " + loggedInUser.phoneNumber;
        document.getElementById("email").innerHTML =  "Email: " + loggedInUser.email;

}