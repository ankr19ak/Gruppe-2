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

