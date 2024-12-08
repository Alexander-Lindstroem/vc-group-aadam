function Bird(name, lifespan, group, food, description, length, weight, found) {
  this.name = name;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found;
}

let birds = [
  new Bird(
      "Cassowary", 
      "20 years", 
      "bird",
      "Plants matter like fruit, insects and small animals like mice and lizards", 
      "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", 
      "1.7m",
      "44kg", 
      "Queensland"
  ),
  new Bird(
      "Kookaburra",
      "20 years",
      "bird",
      "Insects and small animals including snakes, frogs and lizards", 
      "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
      "43cm", 
      "300g", 
      "Australia Wide"
  ),
  new Bird(
      "Yellow-Tailed Black Cockatoo", 
      "41 years", 
      "bird",
      "Fruit, seeds and other plant material", 
      "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
      "65 cm",
      "900g",
      "SE Australia"
  )
];
let sidebarHTML = document.querySelector(".sidebar ul");
birds.forEach(bird => {
  sidebarHTML.innerHTML += `
      <li>
          <a href="#" class="bird">
              <img src="../icons/${bird.name.toLowerCase()}.png" alt="${bird.name.toLowerCase()} Icon" class="icon-side ${bird.name.toLowerCase()}-icon">
              <span class="nav-item">${bird.name}</span>
          </a>
          <span class="tooltip">${bird.name}</span>
      </li>
  `;
});
function showGroupTypeMessage() {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = `
      <div class="group-message">
          <p>Welcome to the Australian Birds Information Page!</p>
      </div>
  `;
}
function showBirdSummary(bird) {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = `
      <div class="bird-summary">
          <h3>${bird.name}</h3>
          <p>${bird.description.split('.')[0]}.</p>
          <button class="read-more">Read More</button>
      </div>
  `;

  document.querySelector('.read-more').addEventListener('click', () => {
      showFullBirdDetails(bird);
  });
}
function showFullBirdDetails(bird) {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = `
      <div class="bird-details">
          <h3>${bird.name} - Full Details</h3>
          <div class="bird-details-grid">
              <div><strong>Lifespan:</strong> ${bird.lifespan}</div>
              <div><strong>Group:</strong> ${bird.group}</div>
              <div><strong>Food:</strong> ${bird.food}</div>
              <div><strong>Length:</strong> ${bird.length}</div>
              <div><strong>Weight:</strong> ${bird.weight}</div>
              <div><strong>Found In:</strong> ${bird.found}</div>
          </div>
          <p>${bird.description}</p>
      </div>
  `;
}

function addBirdClickListeners() {
  const birdLinks = document.querySelectorAll('.sidebar .bird');
  let currentlySelectedBird = null;
  
  birdLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          
          if (currentlySelectedBird === birds[index]) {
              showGroupTypeMessage();
              currentlySelectedBird = null;
          } else {
              showBirdSummary(birds[index]);
              currentlySelectedBird = birds[index];
          }
      });
  });
}
function initializePage() {
  showGroupTypeMessage();
  addBirdClickListeners();
}

document.addEventListener('DOMContentLoaded', initializePage);