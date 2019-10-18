//Klassen undervisningstimer erklæres
class DancingClass {
    constructor(title, location, room, teacher, participants, durationHours, durationMinutes){
        this.title = title;
        this.location = location;
        this.room = room;
        this.teacher = teacher;
        this.durationHours = durationHours;
        this.durationMinutes = durationMinutes;
        this.participants = participants;
    }
}

//Laver en array af ny klasser der bliver oprettet og henter title, location, room, teacher vha. .getElementById.
allClasses = [
    {
        title: "Undervisningstime 1",
        location: "Solbjerg Plads 15",
        room: 156,
        teacher: "Jan Jensen",
        durationHours: 1,
        durationMinutes: 30,
        participants: [
            {
                username: "AndreasWK",
                password: "hej123",
                name: "Andreas",
                birthYear: 1997,
                gender: "Male",
                phoneNumber: 61795436,
                email: "andreas@ersej.dk"
            }
            ]
    },
    {
        title: "Undervisningstime 2",
        location: "Dalgas Have 3",
        room: 254,
        teacher: "Erik Eriksen",
        durationHours: 0,
        durationMinutes: 45,
        participants: []
    },
    {
        title: "Undervisningtime 3",
        location: "Peter Bangs Vej 20",
        room: 10,
        durationHours: 2,
        durationMinutes: 20,
        participants: []
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

function showAllClasses() {
    for(var n = 0; n < allClasses.length; n++){

        var header = document.createElement("h2");
        var headerText = document.createTextNode(allClasses[n].title);
        header.append(headerText);
        document.getElementById("body").append(header);

        var paraSted = document.createElement("P");
        var textSted = document.createTextNode("Sted: " + allClasses[n].location);
        paraSted.appendChild(textSted);
        document.getElementById("body").append(paraSted);

        var paraRoom = document.createElement("P");
        var textRoom = document.createTextNode("Lokale: " + allClasses[n].room);
        paraRoom.appendChild(textRoom);
        document.getElementById("body").appendChild(paraRoom);

        var paraTeacher = document.createElement("P");
        var textTeacher = document.createTextNode("Underviser: " + allClasses[n].teacher);
        paraTeacher.appendChild(textTeacher);
        document.getElementById("body").appendChild(paraTeacher);

        var paraDuration = document.createElement("P");
        var textDuration = document.createTextNode("Varighed: " + allClasses[n].durationHours + " time(r) og " + allClasses[n].durationMinutes + " minutter");
        paraDuration.appendChild(textDuration);
        document.getElementById("body").appendChild(paraDuration);

        var paraParticipants = document.createElement("P");
        var textParticipants= document.createTextNode("Deltagere: " + allClasses[n].participants);
        paraParticipants.appendChild(textParticipants);
        document.getElementById("body").appendChild(paraParticipants);

        var lineBreak = document.createElement("br");
        document.getElementById("body").appendChild(lineBreak);
    }
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

