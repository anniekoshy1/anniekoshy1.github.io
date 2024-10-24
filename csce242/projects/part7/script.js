document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const dynamicGearContainer = document.getElementById('dynamic-gear');

    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
        });
    }

    if (dynamicGearContainer) {
        dynamicGearContainer.style.display = 'none';
    }

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

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();  

            const formData = new FormData(contactForm);  
            formMessage.style.display = 'none';  

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' 
                });

                if (response) { 
                    formMessage.textContent = "Message sent successfully!";
                    formMessage.style.color = "green";
                    formMessage.style.display = "block";
                    contactForm.reset(); 
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
});