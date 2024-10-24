document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const dynamicGearContainer = document.getElementById('dynamic-gear');

    // Toggle the burger menu for mobile view
    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
        });
    }

    // Hide the dynamic content container initially
    if (dynamicGearContainer) {
        dynamicGearContainer.style.display = 'none';
    }

    // Function to load data dynamically from JSON files (if applicable)
    function loadGearAsOneCard(jsonFile, sectionTitle) {
        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                if (dynamicGearContainer) {
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
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Example event listeners for loading different gear collections (optional based on your project)
    const sneakersHeader = document.getElementById('sneakersHeader');
    const clothingHeader = document.getElementById('clothingHeader');

    if (sneakersHeader) {
        sneakersHeader.addEventListener('click', function() {
            loadGearAsOneCard('shoes.json', 'Sneakers Collection');
        });
    }

    if (clothingHeader) {
        clothingHeader.addEventListener('click', function() {
            loadGearAsOneCard('clothing.json', 'Clothing Collection');
        });
    }

    // Contact Form Submission Logic
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();  // Prevent the default form submission behavior

            const formData = new FormData(contactForm);  // Collect the form data
            formMessage.style.display = 'none';  // Hide message initially

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    formMessage.textContent = "Message sent successfully!";
                    formMessage.style.color = "green";
                    formMessage.style.display = "block";
                    contactForm.reset();  // Clear the form fields
                } else {
                    throw new Error('Form submission failed. Please try again.');
                }
            } catch (error) {
                formMessage.textContent = `Error: ${error.message}`;
                formMessage.style.color = "red";
                formMessage.style.display = "block";
            }
        });
    }
    fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This bypasses CORS but prevents access to response
    })
    .then(() => {
        if (formMessage) {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
            formMessage.style.display = "block";
        }
        form.reset();
    })
    .catch((error) => {
        if (formMessage) {
            formMessage.textContent = `Error: ${error.message}`;
            formMessage.style.color = "red";
            formMessage.style.display = "block";
        }
    });    
});