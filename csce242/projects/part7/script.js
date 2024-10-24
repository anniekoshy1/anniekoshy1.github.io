document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const sneakersHeader = document.getElementById('sneakersHeader');
    const clothingHeader = document.getElementById('clothingHeader');
    const watchesHeader = document.getElementById('watchesHeader');
    const foamrollersHeader = document.getElementById('foamrollersHeader');
    const bottleHeader = document.getElementById('bottleHeader');
    const sunglassesHeader = document.getElementById('sunglassesHeader');
    const vestsHeader = document.getElementById('vestsHeader');
    const lacrosseballHeader = document.getElementById('lacrosseballHeader');
    const dynamicGearContainer = document.getElementById('dynamic-gear');

    // Toggle the burger menu for mobile view
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });

    // Hide the dynamic content container initially
    dynamicGearContainer.style.display = 'none';

    // Function to load data dynamically from JSON files
    function loadGearAsOneCard(jsonFile, sectionTitle) {
        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                dynamicGearContainer.innerHTML = ''; 
                let gearItem = `<div class="gear-card"><h3>${sectionTitle}</h3><div class="gear-details">`;

                data.forEach(item => {
                    gearItem += `
                    <div class="gear-shoe">
                      <img src="${item.img_name}" alt="${item.name}" class="gear-image">
                      <div>
                        <p><strong>${item.name}</strong></p>
                        <p><strong>Brand:</strong> ${item.brand}</p>
                        <p><strong>Price:</strong> ${item.price}</p>
                        <p><strong>Rating:</strong> ${item.rating}</p>
                        <ul>${item.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
                      </div>
                    </div>`;
                });

                gearItem += `</div></div>`;
                dynamicGearContainer.innerHTML = gearItem;
                dynamicGearContainer.style.display = 'flex'; 
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    sneakersHeader.addEventListener('click', function() {
        loadGearAsOneCard('shoes.json', 'Sneakers Collection');
    });

    clothingHeader.addEventListener('click', function() {
        loadGearAsOneCard('clothing.json', 'Clothing Collection');
    });
    watchesHeader.addEventListener('click', function() {
        loadGearAsOneCard('watches.json', 'Watches Collection');
    });
    foamrollersHeader.addEventListener('click', function() {
        loadGearAsOneCard('foam_rollers.json', 'Foam Rollers Collection');
    });
    bottleHeader.addEventListener('click', function() {
        loadGearAsOneCard('waterbottles.json', 'Water Bottles Collection');
    });
    sunglassesHeader.addEventListener('click', function() {
        loadGearAsOneCard('sunglasses.json', 'Sunglasses Collection');
    });
    vestsHeader.addEventListener('click', function() {
        loadGearAsOneCard('vests.json', 'Vests Collection');
    });
    lacrosseballHeader.addEventListener('click', function() {
        loadGearAsOneCard('lacrosse_balls.json', 'Lacrosse Ball Collection');
    });

    document.getElementById('contactForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
    
        const form = event.target;
        const formData = new FormData(form);
        const formMessage = document.getElementById('formMessage');
    
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                if (formMessage) { // Check if formMessage exists before trying to access it
                    formMessage.textContent = "Message sent successfully!";
                    formMessage.style.color = "green";
                    formMessage.style.display = "block";
                }
                form.reset(); // Clear the form
            } else {
                const result = await response.json();
                throw new Error(result.message || 'Form submission failed.');
            }
        } catch (error) {
            if (formMessage) { // Check if formMessage exists before trying to access it
                formMessage.textContent = `Error: ${error.message}`;
                formMessage.style.color = "red";
                formMessage.style.display = "block";
            }
        }
    });
});