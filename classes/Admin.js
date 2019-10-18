
//Opretter klasse med et string (admin). Derefter startes der en constructor, som tillader os at definere en type og
//et set af metoder. Dette er lavet med udgangspunkt i eksemplet fra side 102 i "Eloquent Javascript"
class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

var adminUsers = [
    {
        username: "Admin",
        password: "password123"
    }
    ];
//Funktion der tjekker om administratorens login er indtastet korrekt
function adminLogin() {
    if(checkAdminLogIn()){
        alert("Hello Admin! You are now logged in.");
        window.location.href = "adminSite.html";
    } else {
        alert("Wrong username or password");
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
