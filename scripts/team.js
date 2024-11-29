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
let andre = new Member("André", "Torabpour", 40, "Råcksta", "Guitar")
let adam = new Member("Adam", "Kaya", 34, "Sätra", "Music")

let team = [alex, dimitar, mustafa, andre, adam]

const constructSidebarList = () => {
    let list = document.querySelector(".sidebar__list")
    team.forEach(member => {
        list.innerHTML += ` <li>
                                <a href="#">
                                    <img src="../icons/echidna.png" alt="${member.firstName.toLowerCase()} Icon" class="icon-side ${member.firstName.toLowerCase()}-icon">
                                    <span class="nav-item">${member.firstName}</span>
                                </a>
                            <span class="tooltip">${member.firstName}</span>
                            </li>`
    });
    
}

constructSidebarList();



/*<li>
<a href="#">
    <img src="../icons/echidna.png" alt="echidna Icon" class="icon-side echidna-icon">
    <span class="nav-item">Echidna</span>
</a>
<span class="tooltip">Echidna</span>
</li>*/