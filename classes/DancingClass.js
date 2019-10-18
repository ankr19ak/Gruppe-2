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

//Laver en array af ny klasser der bliver oprettet og henter title, location, room, teacher og duration vha. .getElementById.
allClasses = [
    {
        title: "Undervisningstime1",
        location: "Solbjerg Plads 15",
        room: 156,
        teacher: "Jan Jensen",
        duration: 100
    },
    {
        title: "Undervisningstime2",
        location: "Dalgas Have 3",
        room: 254,
        teacher: "Erik Eriksen",
        duration: 45
    },
    {
        title: "Undervisningtime3",
        location: "Peter Bangs Vej 20",
        room: 10,
        duration: 200
    }
];
function createDancingClass(){
    let dancingClass = new DancingClass(
        document.getElementById("title").value,
        document.getElementById("location").value,
        document.getElementById("room").value,
        document.getElementById("teacher").value,
        document.getElementById("duration").value
    );

    //Klasserne bliver pushet op og logget ind i consolen.
    allClasses.push(dancingClass);
    alert('You have created a new class.');
    console.log(allClasses);
}

//Klasserne bliver vist i localstorage.
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

//test

