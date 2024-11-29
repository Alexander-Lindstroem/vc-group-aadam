let frillNeckedLizard = {
    name: "Frill-necked lizard",
    lifespan: "20 years",
    group: "Reptile",
    food: "Small insects and spiders"
};

let hawksbillTurtle = {
    name: "Hawksbill Turtle",
    lifespan: "50 years",
    group: "Reptile",
    food: "Other animals (sponges & jellyfish), sea plants"
};

let perentie = {
    name: "Perentie",
    lifespan: "20 years",
    group: "Reptile",
    food: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds"
};


const updateFrillNeckedLizardText = (newText) => {
    const elements = document.querySelectorAll('#frill-necked-lizard, .tooltip.lizard');
    elements.forEach(element => {
        element.textContent = newText;
    });
};

const updateHawksbillTurtleText = (newText) => {
    const elements = document.querySelectorAll('#hawksbill-turtle, #hawsbill');
    elements.forEach(element => {
        element.textContent = newText;
    });
};

const updatePerentieText = (newText) => {
    const elements = document.querySelectorAll('#perentie');
    elements.forEach(element => {
        element.textContent = newText;
    });
};

updateFrillNeckedLizardText("Frill necked Lizard");
updateHawksbillTurtleText("Hawksbill Turtle");
updatePerentieText("Perentie")


/*document.addEventListener("DOMContentLoaded", () => {
    // Hämta alla element med klassen nav-item
    const navItems = document.querySelectorAll(".nav-item");

    // Lägg till klickhändelse för varje nav-item
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            // Ta bort "active"-klassen från alla nav-item
            navItems.forEach(nav => nav.classList.remove("active"));

            // Lägg till "active"-klassen på det klickade elementet
            item.classList.add("active");
        });
    });
});*/

document.addEventListener("DOMContentLoaded", () => {
    // Hämta alla länkar i sidomenyn
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

    // Lägg till en klickhändelse på varje länk
    sidebarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Förhindra standardbeteende för länkar

            // Ta bort "active"-klassen från alla länkar
            sidebarLinks.forEach(nav => nav.classList.remove("active"));

            // Lägg till "active"-klassen på den klickade länken
            link.classList.add("active");
        });
    });
});
