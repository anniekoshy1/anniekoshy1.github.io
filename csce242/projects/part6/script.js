document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const sneakersHeader = document.getElementById('sneakersHeader');
    const clothingHeader = document.getElementById('clothingHeader');
    const clothingHeader = document.getElementById('watchesHeader');
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

    // Event listeners to load sneakers and clothing collections
    sneakersHeader.addEventListener('click', function() {
        loadGearAsOneCard('shoes.json', 'Sneakers Collection');
    });

    clothingHeader.addEventListener('click', function() {
        loadGearAsOneCard('clothing.json', 'Clothing Collection');
    });
    watchesHeader.addEventListener('click', function() {
        loadGearAsOneCard('watches.json', 'Watches Collection');
    });
    
});