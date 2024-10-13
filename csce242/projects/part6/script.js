document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const sneakersHeader = document.getElementById('sneakersHeader');
    const dynamicGearContainer = document.getElementById('dynamic-gear');

    
    dynamicGearContainer.style.display = 'none';

    
    function loadShoesAsOneCard(jsonFile) {
        fetch(jsonFile)
          .then(response => response.json())
          .then(data => {
            dynamicGearContainer.innerHTML = ''; 
            
          
            let gearItem = `
              <div class="gear-card">
                <h3>Sneakers Collection</h3>
                <div class="gear-details">
            `;

           
            data.forEach(item => {
              gearItem += `
                <div class="gear-shoe">
                  <img src="${item.img_name}" alt="${item.name}" class="gear-image">
                  <div>
                    <p><strong>${item.name}</strong></p>
                    <p><strong>Brand:</strong> ${item.brand}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p><strong>Rating:</strong> ${item.rating}</p>
                    <ul>
                      ${item.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `;
            });

            gearItem += `</div></div>`;
            dynamicGearContainer.innerHTML = gearItem;

            
            dynamicGearContainer.style.display = 'block';
          })
          .catch(error => console.error('Error fetching shoe data:', error));
    }
  
    
    sneakersHeader.addEventListener('click', function() {
      loadShoesAsOneCard('shoes.json'); 
    });
});