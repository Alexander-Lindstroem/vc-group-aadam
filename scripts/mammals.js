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

let mammals = [
    new Animal(
        "Echidna",
        50,
        "Mammals",
        "Insects such as ants and termites, beetle larvae and worms",
        "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
        76,
        10,
        "Throughout Australia"
    ),

    new Animal(
        "Tasmanian Devil",
        5,
        "Mammals",
        "A predator, then eat meat from other mammals such as wallabies and wombats",
        "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
        70,
        10,
        "Tasmania"
    ),

    new Animal(
        "Quokka",
        10,
        "Mammals",
        "Plant eaters, they munch on shrubs and grasses",
        "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
        50,
        3,
        "Only found on Rottnest Island and a few places on mainland Western Australia"
    )
];

let initialShowcaseHTML = `
        <div class="title">Welcome!</div>
        <div class="welcome-description">This is our animal Zoo. WOW</div>
        <div class="pet-house"><img src="../icons/pet-house.png" alt=""></div>
    `

let showcase = document.querySelector(".showcase");
showcase.innerHTML = initialShowcaseHTML;

let sidebarHTML = document.querySelector(".sidebar ul");

mammals.forEach(mammal => {
    sidebarHTML.innerHTML += `
            <li>
                <a href="#" class="animal">
                    <img src="../icons/${mammal.name.toLowerCase()}.png" alt="${mammal.name.toLowerCase()} Icon" class="icon-side ${mammal.name.toLowerCase()}-icon">
                    <span class="nav-item">${mammal.name}</span>
                </a>
                <span class="tooltip">${mammal.name}</span>
            </li>
    `
});

let animalButtons = Array.from(document.querySelectorAll(".animal"));

animalButtons.forEach(b => b.addEventListener('click', ()=> {
    let activeAnimal = animalButtons.find(b => b.classList.contains("animal-active"));

    if (activeAnimal === undefined || activeAnimal != b) {
        if (activeAnimal != undefined) {
            activeAnimal.classList.remove("animal-active");
            b.classList.add("animal-active");
        } 
        else b.classList.add("animal-active");

        let selectedAnimal = mammals.find(a => a.name === b.querySelector(".nav-item").innerHTML);

        showcase.innerHTML = `
        <div class="title">${selectedAnimal.name}</div>
        <div class="container">
            <div class="statistics">
                <ul>
                    <li>
                        <p>lifespan: ${selectedAnimal.lifespan} years</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>group: ${selectedAnimal.group}</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>food: ${selectedAnimal.food}</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>length: ${selectedAnimal.length}</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>weight: ${selectedAnimal.weight}</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>found: ${selectedAnimal.habitat}</p>
                    </li>
                </ul>
            </div>
            <div class="description">
                <p>
                    ${selectedAnimal.description}
                </p>
            </div>
        </div>

        <div class="pet-house"><img src="../icons/pet-house.png" alt=""></div>
        `
    }
    else {
        activeAnimal.classList.remove("animal-active");
        showcase.innerHTML = initialShowcaseHTML;
    }   
}))



