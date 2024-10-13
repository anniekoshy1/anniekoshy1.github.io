const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to fetch and display dynamic gear data from JSON
function loadGear(jsonFile) {
    fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
        const dynamicGearContainer = document.getElementById('dynamic-gear');
        dynamicGearContainer.innerHTML = ''; // Clear previous content if any
        
        data.forEach(item => {
          const gearItem = `
            <div class="gear-item">
              <img src="${item.img_name}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p><strong>Brand:</strong> ${item.brand}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Rating:</strong> ${item.rating}</p>
              <ul>
                ${item.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
          `;
          dynamicGearContainer.innerHTML += gearItem;
        });
      })
      .catch(error => console.error('Error fetching gear data:', error));
}

// Add event listeners to category buttons
document.getElementById('shoesBtn').addEventListener('click', function() {
  loadGear('shoes.json'); // Load the shoes JSON file when clicked
});

document.getElementById('clothingBtn').addEventListener('click', function() {
  loadGear('clothing.json'); // Load the clothing JSON file when clicked
});

document.getElementById('watchesBtn').addEventListener('click', function() {
  loadGear('watches.json'); // Load the watches JSON file when clicked
});

// Optionally, load default gear when the page first loads
document.addEventListener('DOMContentLoaded', function() {
  loadGear('shoes.json'); // Load shoes by default on page load
});