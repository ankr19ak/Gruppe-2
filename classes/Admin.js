//Den første linje: en klasse med et string (admin). Nøgleordet "class admin" starter en constructor, som tillader os
// - at definere en type (linje 6. - via this.username og this.password) og et set af metoder samlet på et sted.
//Nedenstående kodning er lavet med udgangspunkt i eksemplet fra side 102 i "Eloquent Javascript"

class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const username = "Admin";
const password = 123;

function checkAdminLogIn(){

if (enteredName.value == username && enteredPass.value == password){
    alert("Hello Admin! You are now logged in.");
    window.location.href = "adminSite.html";
}
else alert("Wrong username or password.");
    }
