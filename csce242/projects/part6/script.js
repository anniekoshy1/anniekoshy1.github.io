document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
  
    function loadGear(jsonFile) {
        fetch(jsonFile)
          .then(response => response.json())
          .then(data => {
            const dynamicGearContainer = document.getElementById('dynamic-gear');
            dynamicGearContainer.innerHTML = ''; // Clear previous content if any
            
            data.forEach(item => {
              const gearItem = `
                <div class="gear-card">
                  <img src="${item.img_name}" alt="${item.name}" class="gear-image">
                  <div class="gear-details">
                    <h3>${item.name}</h3>
                    <p><strong>Brand:</strong> ${item.brand}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p><strong>Rating:</strong> ${item.rating}</p>
                    <ul>
                      ${item.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `;
              dynamicGearContainer.innerHTML += gearItem;
            });
          })
          .catch(error => console.error('Error fetching gear data:', error));
    }    
  
    // Load all JSON data when the page loads
    loadGear('shoes.json'); // Load shoes by default on page load
    loadGear('accessories.json');
    loadGear('watches.json');
  });  