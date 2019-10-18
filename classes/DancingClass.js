//Klassen undervisningstimer erklæres
class DancingClass {
    constructor(title, location, room, teacher, duration){
        this.title="title";
        this.location="location";
        this.room="room";
        this.teacher="teacher";
        this.duration="duration";
    }
}

allClasses = [];
function createDancingClass(){
    let dancingClass = new DancingClass(
        document.getElementById("title").value,
        document.getElementById("location").value,
        document.getElementById("room").value,
        document.getElementById("teacher").value,
        document.getElementById("duration").value
    );
    allClasses.push(dancingClass);
    storeClass();
    console.log(allClasses);
}

function storeClass(){
    localStorage.setItem("title", title.value);
    localStorage.setItem("location", location.value);
    localStorage.setItem("room", room.value);
    localStorage.setItem("teacher", teacher.value);
    localStorage.setItem("duration", duration.value);
    alert('You have created a new class.');
}

function showClass(){
    console.log("Show new class stored in localStorage");
    console.log(localStorage);
}

// Funktion der tjekker om 'title' er skrevet
function checkDancingClassName() {
    if(document.getElementById('title').value.length === 0){
        alert("Please enter title");
    }
}

// Funktion der tjekker om 'location' er skrevet
function checkDancingClassLocation() {
    if(document.getElementById('location').value.length === 0){
        alert("Please enter location");
    }
}

// Funktion der tjekker om 'time' er valgt. Ved ikke om det virker!
function checkDancingClassTime() {
    if(document.getElementById('time').value === 0){
        alert("Please select time");
    }
}

// Funktion der tjekker om 'room' er skrevet
function checkDancingClassRoom() {
    if(document.getElementById('room').value.length === 0){
        alert("Please enter room");
    }
}

// Funktion der tjekker om 'taecher' er skrevet
function checkDancingClassTeacher() {
    if(document.getElementById('teacher').value.length === 0){
        alert("Please enter teacher");
    }
}

//Funktion der tjekker om 'duration' er valgt
function checkDancingClassduration() {
    if(document.getElementById('duration').value === 0){
        alert("Please select duration");
    }
}


