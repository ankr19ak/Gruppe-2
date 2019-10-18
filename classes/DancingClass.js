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


