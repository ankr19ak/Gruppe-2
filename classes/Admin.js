
//Opretter klasse med et string (admin). Derefter startes der en constructor, som tillader os at definere en type og et set af metoder.
//Dette er lavet med udgangspunkt i eksemplet fra side 102 i bogen "Eloquent Javascript"
class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
//Laver en variabel hvor der erklæres hvad admins username og password skal være.
var adminUsers = [
    {
        username: "Admin",
        password: "password123"
    }
    ];
//Funktion der tjekker om administratorens login er indtastet korrekt, hvilket sker via et if og if-else statement, hvortil der vises en alert-box.
//Nedenstående stykke kodning er lavet ved hjælp af eksemplet på side 49, 50 og 51 i bogen "Eloquent Javascript" om recursion.
function adminLogin() {
    if(checkAdminLogIn()){
        alert("Hello Admin! You are now logged in.");
        storeLoggedInAdmin();
        window.location.href = "adminSite.html";
    } else {
        alert("Wrong admin username or password");
    }
}
//Tjekker i arrayet om admins username og password er korrekt indtastet
function checkAdminLogIn() {
    for (var n = 0; n <= adminUsers.length - 1; n++) {
        if (adminUsers[n].username === document.getElementById("enteredName").value && adminUsers[n].password === document.getElementById("enteredPass").value) {
            return true;
        }
    }
}
//Gemmer adminUsers i sessionstorage. Vi kalder den "adminUsers" vha. stringify.
function storeLoggedInAdmin(){
 sessionStorage.setItem("loggedInAdmin", JSON.stringify(adminUsers[0]));
}

//Henter "adminUsers" fra sessionstorage vha. parse.
function unpackLoggedInAdmin(){
   var loggedInAdmin = JSON.parse(sessionStorage.getItem("loggedInAdmin"));
}

function logOutAdmin(){
    sessionStorage.clear();
    window.location.href = "Login.html";
}

