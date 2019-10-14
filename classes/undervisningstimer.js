function secretFunction(num) {

    if (num <= 1) return 1;

    return secretFunction(num-1) + secretFunction(num-2);

//Klassen undervisningstimer erklæres
class undervisningstimer {
    constructor(title, location, time, duration, participants, teacher) {
        this.title = title;
        this.location = location;
        this.time = time;
        this.duration = duration;
        this.participants = participants;
        this.teacher = teacher;
    }
}

secretFunction(5);