class Bird {
    constructor(name, size, lifespan, food, habitat, interestingFact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.interestingFact = interestingFact;
        this.image = image;
    }

    getSection() {
        return `
            <div class="bird" onclick="showModal('${this.name}')">
                <h3>${this.name}</h3>
                <img src="${this.image}" alt="${this.name}" />
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <div>
                <h2>${this.name}</h2>
                <img src="${this.image}" alt="${this.name}" />
                <p>Size: ${this.size}</p>
                <p>Lifespan: ${this.lifespan}</p>
                <p>Food: ${this.food}</p>
                <p>Habitat: ${this.habitat}</p>
                <p>Interesting Fact: ${this.interestingFact}</p>
            </div>
        `;
    }
}

// Array of Bird objects
const birds = [
    new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar (Sugar water)', 'Trees', "They're nicknamed 'Hummers'", 'assignments/assignment09/images/hummingbird.jpg'),
    new Bird('Blue Jay', '9-12 inches', '7 years', 'Seeds, insects', 'Woodlands', 'Known for their intelligence', 'path/to/bluejay.jpg'),
    new Bird('Cardinal', '8-9 inches', '3 years', 'Seeds, fruit', 'Gardens', 'They’re often seen in pairs', 'path/to/cardinal.jpg'),
    new Bird('Robin', '9-11 inches', '2 years', 'Insects, berries', 'Forests', 'They’re a sign of spring', 'path/to/robin.jpg')
];

// Function to display birds on the DOM
function displayBirds() {
    const container = document.getElementById('bird-container');
    birds.forEach(bird => {
        container.innerHTML += bird.getSection();
    });
}

// Modal functions
function showModal(name) {
    const bird = birds.find(b => b.name === name);
    const modal = document.getElementById('myModal');
    modal.querySelector('.w3-modal-content').innerHTML = bird.getExpandedSection();
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Call display function on page load
window.onload = displayBirds;