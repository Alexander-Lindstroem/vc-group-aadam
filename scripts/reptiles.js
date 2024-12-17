function Animal(name, lifespan, group, food, description, length, weight, found) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
}

let reptiles = [
frillNeckedLizard = new Animal(
    "Frill necked lizard",
    "20 years", 
    "Reptile", 
    "Small insects and spiders", 
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", 
    "90cm", 
    "1 kg", 
    "Northern Australia"
),

hawksbillTurtle = new Animal(
    "Hawkbill turtle",
    "50 years ", 
    "Reptile", 
    "other animals (sponges & jellyfish), sea plants", 
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "80cm (carapace)", 
    "50kg",
    "Tropical coasts of Queensland, Northern Territory and Western Australia."
),

perentie  = new Animal(
    "Perentie",
    "20 years", 
    "Reptile", 
    "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds.", 
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.", 
    "2.5 m", 
    "20kg", 
    "Deserts"
),
]


let animalInfo = document.querySelector(".info-animal")


const constructSidebarList = () => {
    let list = document.querySelector(".sidebar__list");
    reptiles.forEach(animal => {
        let animalNameButton = document.createElement("li");
        animalNameButton.innerHTML =  `<a href="#" class="nav-link" data-name="${animal.name.toLowerCase()}">
            <img src="../icons/${animal.name.toLowerCase()}.png" alt="Frill-necked Lizard Icon" class="icon-side frill-necked-lizard-icon">
            <span class="nav-item" id="frill-necked-lizard">${animal.name}</span>
        </a>
        <span class="tooltip lizard">${animal.name}</span>`
        list.appendChild(animalNameButton)

    });
}

constructSidebarList()



    const animalNameButtons = Array.from(document.querySelectorAll(".nav-link"))
    let selectedAnimalIndex 
    animalNameButtons.forEach (animalNameButton => {
        animalNameButton.addEventListener("click", (event) => {
            let welcomeMessage = document.querySelector(".welcome");
            let animalIndex = animalNameButtons.indexOf(animalNameButton)
            if (selectedAnimalIndex !== animalIndex ){
            
                selectedAnimalIndex = animalIndex
                animalInfo.classList.remove("hide");
                welcomeMessage.classList.add("hide");
            } else {
                selectedAnimalIndex = ""  
                animalInfo.classList.add("hide");
                welcomeMessage.classList.remove("hide");
            }
        


        animalInfo.innerHTML = `
           <h2>${reptiles[animalIndex].name}</h2>
            <p>${reptiles[animalIndex].description}</p>
            <p><strong>Lifespan:</strong> ${reptiles[animalIndex].lifespan}</p>
            <p><strong>Group:</strong> ${reptiles[animalIndex].group}</p>
            <p><strong>Food:</strong> ${reptiles[animalIndex].food}</p>
            <p><strong>Length:</strong> ${reptiles[animalIndex].length}</p>
            <p><strong>Weight:</strong> ${reptiles[animalIndex].weight}</p>
            <p><strong>Found:</strong> ${reptiles[animalIndex].found}</p>
        `


              

        } )
       
    });





/*
                    <li>
                        <a href="#" class="nav-link" data-name="frill-necked-lizard">
                            <img src="../icons/Frill-necked-lizard.png" alt="Frill-necked Lizard Icon" class="icon-side frill-necked-lizard-icon">
                            <span class="nav-item" id="frill-necked-lizard">lizard</span>
                        </a>
                        
                        <span class="tooltip lizard">lizard</span>
                    </li>
                    <li>
                        <a href="#" class="nav-link" data-name="hawksbill-turtle">
                            <img src="../icons/hawksbill-turtle.png" alt="Hawksbill Turtle Icon" class="icon-side hawksbill-turtle-icon">
                            <span class="nav-item" id="hawksbill-turtle">---Hawksbill Turtle----</span>
                        </a>
                        <span class="tooltip hawsbill" id="hawsbill">---Hawksbill Turtle----</span>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../icons/monitor-lizard.png" alt="Quokka Icon" class="icon-side Perentie-icon">
                            <span class="nav-item" id="perentie">---Perentie--- </span>
                        </a>
                        <span class="tooltip perentie" id="perentie">---Perentie--- </span>
                    </li>
*/
