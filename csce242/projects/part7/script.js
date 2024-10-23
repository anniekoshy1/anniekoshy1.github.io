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
        event.preventDefault();
      
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
      
        const formMessage = document.getElementById('formMessage');
        
        // Simulate sending email (use backend service or API for actual email sending)
        try {
          // Here you'd make an actual email API call. Example:
          // await fetch('/send-email', { method: 'POST', body: JSON.stringify({ name, email, message }) });
          
          formMessage.textContent = "Message sent successfully!";
          formMessage.style.color = "green";
          formMessage.style.display = "block";
        } catch (error) {
          formMessage.textContent = "Error sending message. Please try again.";
          formMessage.style.color = "red";
          formMessage.style.display = "block";
        }
      });      
});