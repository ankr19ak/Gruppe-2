//Klassen undervisningstimer erklæres
class DancingClass {
    constructor(title, location, room, teacher, durationHours, durationMinutes){
        this.title = title;
        this.location = location;
        this.room = room;
        this.teacher = teacher;
        this.durationHours = durationHours;
        this.durationMinutes = durationMinutes;
    }
}

//Laver en array af ny klasser der bliver oprettet og henter title, location, room, teacher og duration vha. .getElementById.
allClasses = [
    {
        title: "Undervisningstime1",
        location: "Solbjerg Plads 15",
        room: 156,
        teacher: "Jan Jensen",
        durationHours: 1,
        durationMinutes: 30
    },
    {
        title: "Undervisningstime2",
        location: "Dalgas Have 3",
        room: 254,
        teacher: "Erik Eriksen",
        durationHours: 0,
        durationMinutes: 45
    },
    {
        title: "Undervisningtime3",
        location: "Peter Bangs Vej 20",
        room: 10,
        durationHours: 2,
        durationMinutes: 20
    }
];
function createDancingClass() {
    if (checkDancingClassName()
        && checkDancingClassLocation()
        && checkDancingClassTime()
        && checkDancingClassRoom()
        && checkDancingClassTeacher()
        && checkDancingClassDurationHours()
        && checkDancingClassDurationMinutes()
    ) {
        let dancingClass = new DancingClass(
            document.getElementById("title").value,
            document.getElementById("location").value,
            document.getElementById("room").value,
            document.getElementById("teacher").value,
            document.getElementById("duration hours").value,
            document.getElementById("duration minutes").value
        );

        //Klasserne bliver pushet op og logget ind i consolen.
        allClasses.push(dancingClass);
        alert('You have created a new class.');
        console.log(allClasses);
    }
}

//Klasserne bliver vist i localstorage.
function showClass(){
    console.log("Show new class stored in localStorage");
    console.log(localStorage);
}

// Funktion der tjekker om 'title' er skrevet
function checkDancingClassName() {
    if(document.getElementById('title').value.length > 0){
        return true;
    }
    else alert("Please enter title");
}

// Funktion der tjekker om 'location' er skrevet
function checkDancingClassLocation() {
    if(document.getElementById('location').value.length > 0){
        return true;
    }
    else alert("Please enter location");
}

// Funktion der tjekker om 'time' er valgt. Ved ikke om det virker
function checkDancingClassTime() {
    if(document.getElementById('time').selectedIndex > 0){
        return true;
    }
    else alert("Please select time");
}

// Funktion der tjekker om 'room' er skrevet
function checkDancingClassRoom() {
    if(document.getElementById('room').value.length > 0){
        return true;
    }
    else alert("Please enter room");
}

// Funktion der tjekker om 'taecher' er skrevet
function checkDancingClassTeacher() {
    if(document.getElementById('teacher').value.length > 0){
        return true;
    }
    else alert("Please enter teacher");
}

//Funktion der tjekker om 'duration hours' er valgt
function checkDancingClassDurationHours() {
    if(document.getElementById('duration hours').selectedIndex > 0){
        return true;
    }
    else alert("Please select duration hours");
}

//Funktion der tjekker om 'duration minutes' er valgt
function checkDancingClassDurationMinutes() {
    if(document.getElementById('duration minutes').selectedIndex > 0){
        return true;
    }
    else alert("Please select duration minutes");
}


