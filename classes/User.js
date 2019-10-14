//En klasse med username og password
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

    allUsers = [];
    function createUser() {
        let user = new User(document.getElementById('user').value, document.getElementById('password').value);

        allUsers.push(user);
        console.log(allUsers);

    }

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

function showUser() {
    console.log('Show user stored in localStorage.');
    console.log(localStorage);
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