//objects

function Member(firstName, lastName, age, location, hobby) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`
    this.age = age;
    this.location = location;
    this.hobby = hobby;
}

let team = [
    alex = new Member("Alexander", "Lindström", 31, "Sickla", "Japanese"),
    dimitar = new Member("Dimitar", "Manastirski", 21, "Bromma", "Workout"),
    mustafa = new Member("Mustafa", "Larhnimi", 34, "Täby", "Guitar"),
    andre = new Member("Andre", "Torabpour", 40, "Råcksta", "Guitar"),
    adam = new Member("Adam", "Kaya", 34, "Sätra", "Music"),
]

const constructSidebarList = () => {
    let list = document.querySelector(".sidebar__list")
    team.forEach(member => {
        list.innerHTML += ` <li>
                                <a href="#" class="team-sidebar-button ${member.firstName.toLowerCase()}">
                                    <img src="../icons/person.png" alt="${member.firstName.toLowerCase()} Icon" class="icon-side ${member.firstName.toLowerCase()}-icon">
                                    <span class="nav-item">${member.firstName}</span>
                                </a>
                            <span class="tooltip">${member.firstName}</span>
                            </li>`
    });
}
    
constructSidebarList();

let buttons = Array.from(document.querySelectorAll(".team-sidebar-button"))
let content = document.querySelector(".team-content")

//const selectTeamMember = () => {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let teamMember = team[buttons.indexOf(button)]
            let teamMemberName = teamMember.firstName.toLowerCase();
            if (button.classList.contains(teamMemberName)) {
                content.innerHTML = `<div class="team-content__container">
                                        <img src="../image/${teamMemberName}.png" alt="picture of ${teamMemberName}" width="25%" class="team-content__image">
                                            <div class="team-content__text-container">
                                                <h3 class="team-content__title">${teamMember.fullName}</h3>
                                                <p class="team-content__text-paragraph">${teamMember.age} years old.</p>
                                                <p class="team-content__text-paragraph">Lives in ${teamMember.location}.</p>
                                                <p class="team-content__text-paragraph">Has ${teamMember.hobby} as a hobby.</p>
                                            </div>
                                        </div>`
            }
        })
    })
//}