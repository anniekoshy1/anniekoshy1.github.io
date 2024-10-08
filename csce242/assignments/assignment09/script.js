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

const birds = [
    new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar', 'Trees', "They're nicknamed 'Hummers'", 'images/hummingbird.jpg'),
    new Bird('Blue Jay', '9-12 inches', '7 years', 'Seeds, insects', 'Woodlands', 'Known for their intelligence', 'images/bluejay.jpg'),
    new Bird('Cardinal', '8-9 inches', '3 years', 'Seeds, fruit', 'Gardens', 'They’re often seen in pairs', 'images/cardinal.jpg'),
    new Bird('Robin', '9-11 inches', '2 years', 'Insects, berries', 'Forests', 'They’re a sign of spring', 'images/robin.jpg')
];

function displayBirds() {
    const container = document.getElementById('bird-container');
    birds.forEach(bird => {
        container.innerHTML += bird.getSection();
    });
}

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

window.onload = displayBirds;