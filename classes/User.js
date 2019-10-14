//En klasse med username og password

this.username = document.getElementById('user');
this.password = document.getElementById('password');


// Store input from registration form in localStorage
function storeLogin() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    alert('New user has been created.');
}

// Function to list user in localStorage
function showUser() {
    console.log('Show user stored in localStorage.');
    console.log(localStorage);
}

function checkLogin() {

    // Stored data from the registration form
    var storedName = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');

    // Entered data in the login form
    var enteredName = document.getElementById('enteredName');
    var enteredPass = document.getElementById('enteredPass');

    // Check if stored data from registration form is equal to entered data from login form
    if(enteredName.value == storedName && enteredPass.value == storedPass) {
        alert('You are logged in.');
    }else {
        alert('Error. Wrong login.');
    }
}

