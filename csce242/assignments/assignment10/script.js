// Fetch the JSON data asynchronously
async function fetchIceCreams() {
    try {
        const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
        const data = await response.json();
        displayIceCreams(data.ice_creams);
    } catch (error) {
        console.error('Error fetching ice cream data:', error);
    }
}

// Display the ice creams in the grid
function displayIceCreams(iceCreams) {
    const container = document.getElementById('ice-cream-container');
    iceCreams.forEach(iceCream => {
        // Create a new div for each ice cream
        const iceCreamDiv = document.createElement('div');
        iceCreamDiv.classList.add('ice-cream');
        
        // Create the image element
        const img = document.createElement('img');
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
        img.alt = iceCream.name;

        // Create the overlay for the ice cream name
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerText = iceCream.name;
        
        // Append image and overlay to the ice cream div
        iceCreamDiv.appendChild(img);
        iceCreamDiv.appendChild(overlay);

        // Append the ice cream div to the container
        container.appendChild(iceCreamDiv);
    });
}

// Call the fetch function when the page loads
window.onload = fetchIceCreams;