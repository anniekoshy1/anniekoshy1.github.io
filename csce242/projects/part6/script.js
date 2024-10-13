document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
  
    // Function to fetch and display shoes in one card from JSON
    function loadShoesAsOneCard(jsonFile) {
        fetch(jsonFile)
          .then(response => response.json())
          .then(data => {
            const dynamicGearContainer = document.getElementById('dynamic-gear');
            dynamicGearContainer.innerHTML = ''; // Clear previous content
            
            // Create a single card for all shoes
            let gearItem = `
              <div class="gear-card">
                <h3>Sneakers Collection</h3>
                <div class="gear-details">
                  <ul>
            `;

            // Loop through the shoes data and add it to the card
            data.forEach(item => {
              gearItem += `
                <li>
                  <img src="${item.img_name}" alt="${item.name}" class="gear-image">
                  <p><strong>${item.name}</strong></p>
                  <p><strong>Brand:</strong> ${item.brand}</p>
                  <p><strong>Price:</strong> ${item.price}</p>
                  <p><strong>Rating:</strong> ${item.rating}</p>
                  <ul>
                    ${item.features.map(feature => `<li>${feature}</li>`).join('')}
                  </ul>
                </li>
              `;
            });

            gearItem += `</ul></div></div>`;

            // Insert the single card into the dynamic-gear container
            dynamicGearContainer.innerHTML = gearItem;
          })
          .catch(error => console.error('Error fetching shoe data:', error));
    }
  
    // Add event listener to the Sneakers header
    document.getElementById('sneakersHeader').addEventListener('click', function() {
      loadShoesAsOneCard('shoes.json'); // Load shoes as one card when the header is clicked
    });
});