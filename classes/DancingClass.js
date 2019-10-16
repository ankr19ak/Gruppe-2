function secretFunction(num) {

    if (num <= 1) return 1;

    return secretFunction(num - 1) + secretFunction(num - 2);

//Klassen undervisningstimer erklæres
    class dancingClass {
        constructor(title, location, time, duration, participants, teacher) {
            this.title = title;
            this.location = location;
            this.time = time;
            this.duration = duration;
            this.participants = participants;
            this.teacher = teacher;
        }
    }


    allClasses =[];
    function createDancingClass(){
        let DancingClass = new DancingClass(document.getElementById('title').value,
            document.getElementById('location').value,
        document.getElementById('time').value,
        document.getElementById('duration').value,
        document.getElementById('participants').value,
        document.getElementById('teacher').value);

allClasses.push(DancingClass);
console.log(allClasses);
}
secretFunction(5)
}

function storeNewDancingClass(){
    localStorage.setItem("title",title.value);
    localStorage.setItem("location",location.value);
    localStorage.setItem("time",time.value);
    localStorage.setItem("duration",duration.value);
    localStorage.setItem("participants",participants.value);
    localStorage.setItem("teacher",teacher.value);
    alert("New class has been created");
}
// Function to list user in localStorage
function showDancingClass() {
    console.log('Show class stored in localStorage.');
    console.log(localStorage);
}

function createNewDancingClass() {
    createDancingClass();
    {
// Stored data from the class creation form
        var storedTitle = localStorage.getItem('title');
        var storedLocation = localStorage.getItem('location');
        var storedTime = localStorage.getItem('time');
        var storedDuration = localStorage.getItem('duration');
        var storedParticipants = localStorage.getItem('participants');
        var storedTeacher = localStorage.getItem('teacher');


// Entered data in the class creation form
        var enteredTitle = document.getElementById('enteredTitle');
        var enteredLocation = document.getElementById('enteredlocation');
        var enteredTime = document.getElementById('enteredTime');
        var enteredDuration = document.getElementById('enteredDuration');
        var enteredParticipants = document.getElementById('enteredParticipants');
        var enteredTeacher = document.getElementById('enteredTeacher');

        // Check if stored data from registration form is equal to entered data from login form
        if (enteredTitle.value == storedTitle && enteredLocation.value == storedLocation  && enteredTime.value == storedTime && enteredDuration.value == storedDuration && enteredParticipants.value== storedParticipants && enteredTeacher.value == storedTeacher) {
            alert('You have created a class.');
        } else {
            alert('Error. Try again.');

