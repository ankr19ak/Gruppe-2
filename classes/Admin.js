//Den første linje: en klasse med et string (admin). Nøgleordet "class admin" starter en constructor, som tillader os
// - at definere en type (linje 6. - via this.username og this.password) og et set af metoder samlet på et sted.
//Nedenstående kodning er lavet med udgangspunkt i eksemplet fra side 102 i "Eloquent Javascript"

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

function adminLogin() {
    if(checkAdminLogIn()){
        alert("Hello Admin! You are now logged in.");
        window.location.href = "adminSite.html";
    } else {
        alert("Wrong username or password");
    }
}

function checkAdminLogIn() {
    for (var n = 0; n <= adminUsers.length - 1; n++) {
        if (adminUsers[n].username === document.getElementById("enteredName").value && adminUsers[n].password === document.getElementById("enteredPass").value) {
            return true;
        }
    }
}
