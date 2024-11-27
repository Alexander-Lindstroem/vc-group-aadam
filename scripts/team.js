//objects

function Member(firstName, lastName, age, location, hobby) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`
    this.age = age;
    this.location = location;
    this.hobby = hobby;
}

let alex = new Member("Alexander", "Lindström", 31, "Sickla", "Japanese")
let dimitar = new Member("Dimitar", "Manastirski", 21, "Bromma", "Workout")
let mustafa = new Member("Mustafa", "Larhnimi", 34, "Täby", "Guitar")
let andre = new Member("André", "Placeholder", 1111, "Placeholder", "Placeholder")
let adam = new Member("Adam", "Placeholder", 1111, "Placeholder", "Placeholder")

let team = [alex, dimitar, mustafa, andre, adam]